import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { StorageService } from '../services/storage.service';

@Injectable()
export class CartService {
    count: number = 0;
    price: number = 0;
    sprice: number = 0;
    items: any[] = [];

    constructor(private http: Http, private storageService: StorageService) { }

    private calc(): void {
        this.price = 0;
        this.count = 0;
        this.sprice = 0;
        for (let i of this.items) {
            if (i.sprice) {
                this.sprice += parseFloat(i.sprice);
            }

            this.price += i.tprice;
            this.count += i.qty;
        }
    }

    clear(): void {
        this.count = 0;
        this.price = 0;
        this.sprice = 0;
        this.items = [];
        
        this.storageService.remove('cart');
    }

    load(): void {
        let cart: any = this.storageService.get('cart');
        if (cart) {
            this.count = cart.count;
            this.price = cart.price;
            this.sprice = cart.sprice;
            this.items = cart.items;
        }
    }

    list(): any[] {
        return this.items;
    }

    add(item: any): void {
        if (item.price.$numberDecimal)
            item.price = parseFloat(item.price.$numberDecimal);

        if (item.ships) {
            for (let s of item.ships) {
                if (s.price.$numberDecimal)
                    s.price = parseFloat(s.price.$numberDecimal);
            }
        }

        let index: number = this.items.findIndex((elm) => {
            return elm.id == item.id;
        });

        item.tprice = item.price * item.qty;
        if (index > -1) {
            let i = this.items[index];
            i.qty += item.qty;
            i.tprice += item.tprice;
            this.items.splice(index, 1, i);
        }
        else {
            this.items.push(item);
        }

        this.calc();

        this.storageService.set('cart', {
            count: this.count,
            price: this.price,
            sprice: this.sprice,
            items: this.items
        });
    }

    update(item: any): void {
        let index: number = this.items.findIndex((elm) => {
            return elm.id == item.id;
        });
        item.tprice = item.price * item.qty;
        this.items.splice(index, 1, item);

        this.calc();

        this.storageService.set('cart', {
            count: this.count,
            price: this.price,
            sprice: this.sprice,
            items: this.items
        });
    }

    remove(item: any): void {
        let index: number = this.items.findIndex((elm) => {
            return elm.id == item.id;
        });
        this.items.splice(index, 1);

        this.calc();        

        this.storageService.set('cart', {
            count: this.count,
            price: this.price,
            sprice: this.sprice,
            items: this.items
        });
    }
}
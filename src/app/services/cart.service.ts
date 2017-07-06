import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CartService {
    count: number = 0;
    price: number = 0;
    items: any[] = [];

    constructor(private http: Http) { }

    private calc(): void {
        this.price = 0;
        this.count = 0;
        for (let i of this.items) {
            this.price += i.tprice;
            this.count += i.qty;
        }
    }

    list(): any[] {
        return this.items;
    }

    add(item: any): void {
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
    }

    update(item: any): void {
        let index: number = this.items.findIndex((elm) => {
            return elm.id == item.id;
        });
        item.tprice = item.price * item.qty;
        this.items.splice(index, 1, item);

        this.calc();
    }

    remove(item: any): void {
        let index: number = this.items.findIndex((elm) => {
            return elm.id == item.id;
        });
        this.items.splice(index, 1);

        this.calc();
    }
}
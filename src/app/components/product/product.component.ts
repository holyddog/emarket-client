import 'rxjs/add/operator/switchMap';

import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Config } from '../../consts/config.const';
import { ItemService } from '../../services/item.service';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'product-component',
    templateUrl: 'product.component.html'
})
export class ProductComponent implements OnInit {
    qty: number = 1;
    item: any = null;
    config: any = Config;

    constructor(private route: ActivatedRoute, private itemService: ItemService, private cartService: CartService) { }

    qtyChange(event): void {
        this.qty = event;
    }

    addCart(): void {
        this.cartService.add({
            id: this.item.id,
            name: this.item.name,
            pic: this.item.pic,
            price: this.item.price,
            ships: this.item.ships,
            qty: this.qty
        });
    }

    focusPic(index: number): void {
        this.item.pic = this.item.pics[index];
    }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => {
                return this.itemService.find(+params.get('id'));
            })
            .subscribe(data => this.item = data);
    }
}
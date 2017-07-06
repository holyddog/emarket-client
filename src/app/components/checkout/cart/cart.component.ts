import { Component, OnInit, NgModule } from '@angular/core';

import { Config } from '../../../consts/config.const';
import { CartService } from '../../../services/cart.service';

@Component({
    selector: 'cart-component',
    templateUrl: 'cart.component.html',
    styles: [`
        .table td {
            vertical-align: middle;
        }
        .table th {
            font-weight: bold;
            text-transform: uppercase;
        }
        .pic {
            width: 80px;
        }
    `]
})
export class CartComponent implements OnInit {
    config: any = Config;

    constructor(private cartService: CartService) {}

    qtyChange(i, event): void {
        i.qty = event;
        this.cartService.update(i);
    }

    ngOnInit() {
    }
}
import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { Config } from '../../../consts/config.const';
import { CartService } from '../../../services/cart.service';
import { CheckoutService } from '../../../services/checkout.service';

import { OrderModel, OrderItem } from '../../../models/order.model';

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
        .form-inline .form-control {
            font-size: 90%;
        }
        .total-summary span {
            display: inline-block !important;
            width: 200px;
        }
    `]
})
export class CartComponent implements OnInit {
    config: any = Config;
    simpleValue: string = "Register";

    constructor(private router: Router, private cartService: CartService, private checkoutService: CheckoutService) {}

    ngOnInit() {
        this.checkoutService.clear();
    }

    qtyChange(i, event): void {
        i.qty = event;
        this.cartService.update(i);
    }

    shipChange(i): void {
        this.cartService.update(i);
    }

    total(i): number {
        return parseFloat((!i.sprice)? 0: i.sprice) + (i.price * i.qty);
    }

    next() {
        let items: any[] = this.cartService.items;
        let orderItems: OrderItem[] = [];
        for (let i of items) {
            orderItems.push({
                sprice: parseFloat(i.sprice),
                qty: parseInt(i.qty),
                item: {
                    id: i.id,
                    name: i.name,
                    pic: i.pic,
                    price: parseFloat(i.price)
                }
            });
        }
        this.checkoutService.order = {
            items: orderItems  
        };
        this.checkoutService.set(2);
        this.router.navigate(['/checkout/shipping']);
    }
}
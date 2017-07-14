import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../../services/cart.service';
import { CheckoutService } from '../../../services/checkout.service';
import { OrderService } from '../../../services/order.service';

declare var $: any;

@Component({
    selector: 'payment-component',
    templateUrl: 'payment.component.html'
})
export class PaymentComponent implements OnInit {
    opts: any[] = [{
        id: 1,
        name: "Credit Card"
    }, {
        id: 2,
        name: "Bank Transfer"
    }, {
        id: 3,
        name: "Cash on Delivery"
    }];
    popt: any;
    errMessage: string;

    constructor(private router: Router, private cartService: CartService, private checkoutService: CheckoutService, private orderService: OrderService) { }

    ngOnInit() {
        // this.popt = this.opts[0];
        this.checkoutService.set(3);
    }

    total(i): number {
        return parseFloat((!i.sprice) ? 0 : i.sprice) + (i.price * i.qty);
    }

    before() {
        this.checkoutService.set(2);
        this.router.navigate(['/checkout/shipping']);
    }

    next() {
        this.checkoutService.order.popt = this.popt;

        let self = this;

        this.orderService.create(this.checkoutService.order)
            .then(function (data) {
                if (!data.error) {
                    self.checkoutService.set(4);
                    self.router.navigate(['/checkout/confirmation'], {
                        queryParams: { id: data.id.toString() }
                    });
                }
                else {
                    self.errMessage = data.error.message;
                    $('#msgDialog').modal('show');
                }
            });
    }
}
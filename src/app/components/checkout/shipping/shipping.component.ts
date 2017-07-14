import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../../services/cart.service';
import { CheckoutService } from '../../../services/checkout.service';
import { AddressService } from '../../../services/address.service';

@Component({
    selector: 'shipping-component',
    templateUrl: 'shipping.component.html',
    styles: [`
        .addr:hover {
            cursor: pointer;
        }
    `]
})
export class ShippingComponent implements OnInit {
    addrs: any[] = [];

    constructor(private router: Router, private cartService: CartService, private checkoutService: CheckoutService, private addressService: AddressService) {}

    ngOnInit() {
        this.checkoutService.set(2);
        this.addressService.list().then(data => this.addrs = data);
    }

    select(addr: any) {
        for (let a of this.addrs) {
            a.def = false;
        }
        addr.def = true;
    }

    before() {
        this.checkoutService.set(1);
        this.router.navigate(['/checkout']);
    }

    next() {
        let addr: any = this.addrs.find(el => {
            return el.def == true;
        });

        this.checkoutService.order.recp = {
            id: addr.id,
            fname: addr.fname,
            lname: addr.lname,
            addr: addr.addr,
            pcode: addr.pcode,
            tel: addr.tel            
        };

        this.checkoutService.set(3);
        this.router.navigate(['/checkout/payment']);
    }
}
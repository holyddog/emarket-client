import { Component, OnInit } from '@angular/core';

import { OrderService } from '../../../services/order.service';

@Component({
    selector: 'order-component',
    templateUrl: 'order.component.html'
})
export class OrderComponent implements OnInit {
    orders: any[] = null;

    constructor(private orderService: OrderService) {}

    getDate(d) {
        return new Date(d);
    }

    ngOnInit() {
        this.orderService.list()
            .then(data => {
                this.orders = data;
            });
    }
}
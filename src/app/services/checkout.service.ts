import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { CartService } from './cart.service';
import { StorageService } from './storage.service';
import { OrderModel } from '../models/order.model';

@Injectable()
export class CheckoutService {
    step: number = 1;
    finished: boolean = false;
    order: OrderModel = null;

    constructor(private cartService: CartService, private storageService: StorageService) {}

    complete(finished: boolean): void {
        this.finished = finished;

        if (finished) {
            this.cartService.clear();
            this.storageService.remove('cart');
        }
    }

    clear(): void {
        this.order = null;
        this.finished = false;
        this.step = 1;
    }

    set(step: number): void {
        this.step = step;
    }
}
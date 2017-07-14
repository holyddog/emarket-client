import { isPlatformServer, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CheckoutService } from '../../../services/checkout.service';
import { OrderService } from '../../../services/order.service';

@Component({
    selector: 'confirmation-component',
    templateUrl: 'confirmation.component.html',
    styles: [`
        label {
            display: block;
            font-size: 80%;
        }
    `]
})
export class ConfirmationComponent implements OnInit {
    order: any = null;

    constructor(@Inject(PLATFORM_ID) private platformId: Object, private route: ActivatedRoute, private checkoutService: CheckoutService, private orderService: OrderService) {}

    ngOnInit() {
        let self = this;

        if (isPlatformBrowser(this.platformId)) {
            this.route.queryParams.subscribe((params: Params) => {
                let id = +params['id'];
                self.orderService.get(id)
                    .then(data => {
                        self.order = data;
                        self.order.orderDate = new Date(data.cdate);
                        console.log(self.order);
                        self.checkoutService.complete(true);
                    });
            });
        }
    }
}
import { PLATFORM_ID, Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

declare var $: any;

@Component({
    selector: 'checkout-component',
    templateUrl: 'checkout.component.html',
    styles: [`
        .circle {
            display: inline-block;            
            width: 48px;
            height: 48px;
            line-height: 48px;
            border: solid 2px #bbb;
            border-radius: 50%;
            margin-right: 1rem;
        }
    `]
})
export class CheckoutComponent implements OnInit {
    constructor(private router: Router, private authService: AuthService) { }

    ngOnInit(): void {
    }
}

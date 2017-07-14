import { PLATFORM_ID, Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { CheckoutService } from '../../services/checkout.service';

declare var $: any;

@Component({
    selector: 'checkout-component',
    templateUrl: 'checkout.component.html',
    styles: [`
        #step-bar {            
            margin-left: -1.5rem;
            margin-right: -1.5rem;
        }
        #step-bar .col {
            position: relative;
            display: block;
        }
        #step-bar .col .line {
            position: absolute;
            top: 24px;
            height: 2px;
            background: #2196F3;
            left: -50%;
            z-index: 0;
            right: 50%;
        }
        #step-bar .col.inactive .line {
            background: #BDBDBD;
        }
        #step-bar .col .circle {
            position: absolute;         
            width: 48px;
            height: 48px;
            line-height: 48px;
            border: solid 2px #bbb;
            border-radius: 50%;
            margin-right: 1rem;
            color: #fff;
            left: 50%;
            margin-left: -24px;
            z-index: 1;
        }
        #step-bar .col .step-text {            
            margin-top: 48px;
            padding-top: 15px;
        }
        #step-bar .col .circle.step-1 {
            background: #FBC02D;
            border-color: #F9A825;
        }
        #step-bar .col .circle.step-2 {
            background: #F57C00;
            border-color: #EF6C00;
        }
        #step-bar .col .circle.step-3 {
            background: #00796B;
            border-color: #00695C;
        }
        #step-bar .col .circle.step-4 {
            background: #388E3C;
            border-color: #2E7D32;
        }
        #step-bar .col.inactive .circle {
            background: #E0E0E0;
            border-color: #BDBDBD;
        }
    `]
})
export class CheckoutComponent implements OnInit {
    
    constructor(private router: Router, private authService: AuthService, private checkoutService: CheckoutService) { }

    ngOnInit(): void {
    }

    inactive(step: number): string {
        return (this.checkoutService.step < step)? "inactive": "";
    }
}

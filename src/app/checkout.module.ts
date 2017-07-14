import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared.module';

import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/checkout/cart/cart.component';
import { ShippingComponent } from './components/checkout/shipping/shipping.component';
import { PaymentComponent } from './components/checkout/payment/payment.component';
import { ConfirmationComponent } from './components/checkout/confirmation/confirmation.component';

import { AuthService } from './services/auth.service';
import { AddressService } from './services/address.service';
import { CheckoutService } from './services/checkout.service';
import { CheckoutGuardService } from './services/checkout-guard.service';
import { OrderService } from './services/order.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        SharedModule,
        RouterModule.forRoot([
            {
                path: 'checkout',
                component: CheckoutComponent,
                children: [
                    { path: '', component: CartComponent },
                    { 
                        path: 'shipping', 
                        component: ShippingComponent, 
                        canActivate: [CheckoutGuardService] 
                    },
                    { 
                        path: 'payment', 
                        component: PaymentComponent,
                        canActivate: [CheckoutGuardService] 
                    },
                    {   
                        path: 'confirmation', 
                        component: ConfirmationComponent, 
                        canActivate: [CheckoutGuardService] 
                    }
                ]
            }
        ])
    ],
    declarations: [CheckoutComponent, CartComponent, ShippingComponent, PaymentComponent, ConfirmationComponent],
    providers: [AuthService, CheckoutService, CheckoutGuardService, AddressService, OrderService]
})
export class CheckoutModule { }

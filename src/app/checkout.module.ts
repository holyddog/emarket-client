import { NgModule  } from '@angular/core';
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

import { AuthService } from './services/auth.service';

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
                    { path: 'shipping', component: ShippingComponent },
                    { path: 'payment', component: PaymentComponent }
                ]
            }
        ])
    ],
    declarations: [CheckoutComponent, CartComponent, ShippingComponent, PaymentComponent],
    providers: [AuthService]
})
export class CheckoutModule { }

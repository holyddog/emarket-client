import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared.module';

import { AccountComponent } from './components/account/account.component';
import { OrderComponent } from './components/account/order/order.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { AddressComponent } from './components/account/address/address.component';
import { AddressFormComponent } from './components/account/address/address-form.component';
import { OpenShopComponent } from './components/account/open-shop/open-shop.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AddressService } from './services/address.service';
import { ShopService } from './services/shop.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        SharedModule,
        RouterModule.forRoot([
            {
                path: 'account',
                component: AccountComponent,
                canActivate: [AuthGuardService],
                children: [
                    { path: '', component: OrderComponent },
                    { path: 'profile', component: ProfileComponent },
                    { path: 'address', component: AddressComponent },
                    { path: 'open-shop', component: OpenShopComponent },
                    { path: 'address/:id', component: AddressFormComponent }
                ]
            }
        ])
    ],
    declarations: [
        AccountComponent, OrderComponent, ProfileComponent, 
        AddressComponent, AddressFormComponent, OpenShopComponent
    ],
    providers: [AuthService, AuthGuardService, AddressService, ShopService]
})
export class AccountModule { }

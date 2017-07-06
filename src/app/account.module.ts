import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AccountComponent } from './components/account/account.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { AddressComponent } from './components/account/address/address.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'account',
                component: AccountComponent,
                canActivate: [AuthGuardService],
                children: [
                    { path: '', component: ProfileComponent },
                    { path: 'address', component: AddressComponent }
                ]
            }
        ])
    ],
    declarations: [AccountComponent, ProfileComponent, AddressComponent],
    providers: [AuthService, AuthGuardService]
})
export class AccountModule { }

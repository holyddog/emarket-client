import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';

import { SharedModule } from './shared.module';
import { AccountModule } from './account.module';
import { CheckoutModule } from './checkout.module';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent, RegisterSuccessComponent } from './components/register/register.component';
import { ProductComponent } from './components/product/product.component';

import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { ItemService } from './services/item.service';
import { CartService } from './services/cart.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        TransferHttpModule,
        SharedModule,
        AccountModule,
        CheckoutModule,
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent,
                pathMatch: 'full'
            },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'register-success', component: RegisterSuccessComponent },
            { path: 'product', component: ProductComponent },
            { path: 'product/:id', component: ProductComponent }
        ])
    ],
    declarations: [
        AppComponent, HomeComponent, LoginComponent, ProductComponent,
        RegisterComponent, RegisterSuccessComponent
    ],
    exports: [AppComponent],
    providers: [AuthService, StorageService, ItemService, CartService]
})
export class AppModule { }

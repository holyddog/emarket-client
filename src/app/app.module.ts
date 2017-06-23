import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        TransferHttpModule,
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent,
                pathMatch: 'full'
            },
            { path: 'login', component: LoginComponent },
            { path: 'product', component: ProductComponent },
            { path: 'product/:id', component: ProductComponent }
        ])
    ],
    declarations: [AppComponent, HomeComponent, LoginComponent, ProductComponent],
    exports: [AppComponent]
})
export class AppModule { }

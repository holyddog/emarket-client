import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { StorageService } from './storage.service';
import { CheckoutService } from './checkout.service';
import { UserModel } from '../models/user.model';
import { Config } from '../consts/config.const';

@Injectable()
export class AuthService {
    user: UserModel;
    url: string;

    constructor(private http: Http, private storage: StorageService, private checkout: CheckoutService) { }

    // me(): object {
    //     return this.authen.get('api/me')
    //         .toPromise()
    //         .then(res => {
    //             return res.json();
    //         });
    // }

    createAuthorizationHeader(headers: Headers) {
        let user: any = this.storage.get('user');
        if (user && user.token) {
            headers.append('Authorization', `Bearer ${user.token}`);
        }
    }

    logIn(email: string, pwd: string): any {
        let body = {
            email: email,
            pwd: pwd,
            client_id: Config.ClientID,
            client_secret: Config.ClientSecret
        };
        return this.http.post(Config.ServiceUrl + '/signin', body)
            .toPromise()
            .then(res => {
                let data = res.json();
                if (!data.error) {
                    this.user = data;
                    this.storage.set('user', this.user);
                }
                else {
                    this.user = null;
                }
                return data;
            });
    }

    logOut(): void {
        this.user = null;
        this.storage.remove('user');
        this.storage.remove('cart');
    }

    register(email: string, pwd: string, fname: string, lname: string): any {
        let body = {
            email: email,
            pwd: pwd,
            fname: fname,
            lname: lname
        };
        return this.http.post(Config.ServiceUrl + '/signup', body)
            .toPromise()
            .then(res => {
                let data = res.json();
                return data;
            });
    }
}
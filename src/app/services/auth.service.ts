import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { StorageService } from './storage.service';
import { UserModel } from '../models/user.model';
import { Config } from '../consts/config.const';

@Injectable()
export class AuthService {
    user: UserModel;
    url: string;

    constructor(private http: Http, private storage: StorageService) { }

    // me(): object {
    //     return this.authen.get('api/me')
    //         .toPromise()
    //         .then(res => {
    //             return res.json();
    //         });
    // }

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
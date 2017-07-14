import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Config } from '../consts/config.const';
import { OrderModel } from '../models/order.model';
import { AuthService } from './auth.service';

@Injectable()
export class OrderService {
    
    constructor(private http: Http, private auth: AuthService) { }

    list(): Promise<any> {
        let headers: Headers = new Headers();
        this.auth.createAuthorizationHeader(headers);
        return this.http.get(Config.ServiceUrl + '/orders', { headers })
            .toPromise()
            .then(res => {
                return res.json();
            });
    }

    get(id: number): Promise<any> {
        let headers: Headers = new Headers();
        this.auth.createAuthorizationHeader(headers);
        return this.http.get(Config.ServiceUrl + '/orders/' + id, { headers })
            .toPromise()
            .then(res => {
                return res.json();
            });
    }

    create(order: OrderModel): any {
        let headers: Headers = new Headers();
        this.auth.createAuthorizationHeader(headers);
        return this.http.post(Config.ServiceUrl + '/orders', order, { headers })
            .toPromise()
            .then(res => {
                return res.json();
            });
    }
}
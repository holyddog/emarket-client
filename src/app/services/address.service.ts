import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Config } from '../consts/config.const';

import { AuthService } from './auth.service';

@Injectable()
export class AddressService {

    constructor(private http: Http, private auth: AuthService) { }

    list(): Promise<any> {
        let headers = new Headers();
        this.auth.createAuthorizationHeader(headers);

        return this.http.get(Config.ServiceUrl + '/addresses', { headers })
            .toPromise()
            .then(res => {
                return res.json();
            });
    }

    provinceList(): Promise<any> {
        return this.http.get(Config.ServiceUrl + '/provinces')
            .toPromise()
            .then(res => {
                return res.json();
            });
    }

    get(id: number): Promise<any> {
        let headers = new Headers();
        this.auth.createAuthorizationHeader(headers);

        return this.http.get(Config.ServiceUrl + '/addresses/' + id, { headers })
            .toPromise()
            .then(res => {
                return res.json();
            });
    }

    add(data: any): Promise<any> {
        let headers = new Headers();
        this.auth.createAuthorizationHeader(headers);

        return this.http.post(Config.ServiceUrl + '/addresses', data, { headers })
            .toPromise()
            .then(res => {
                let data = res.json();
                return data;
            });
    }

    update(id: number, data: any): Promise<any> {
        let headers = new Headers();
        this.auth.createAuthorizationHeader(headers);

        return this.http.put(Config.ServiceUrl + '/addresses/' + id, data, { headers })
            .toPromise()
            .then(res => {
                let data = res.json();
                return data;
            });
    }
}
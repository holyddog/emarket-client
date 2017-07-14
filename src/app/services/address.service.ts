import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Config } from '../consts/config.const';

import { AuthService } from './auth.service';

@Injectable()
export class AddressService {

    constructor(private http: Http, private auth: AuthService) { }

    list(): any {
        let headers = new Headers();
        this.auth.createAuthorizationHeader(headers);

        return this.http.get(Config.ServiceUrl + '/addresses', { headers })
            .toPromise()
            .then(res => {
                return res.json();
            });
    }
}
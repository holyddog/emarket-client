import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Config } from '../consts/config.const';

@Injectable()
export class ItemService {
    
    constructor(private http: Http) { }

    list(): any {
        return this.http.get(Config.ServiceUrl + '/items')
            .toPromise()
            .then(res => {
                return res.json();
            });
    }

    find(id: number): any {
        return this.http.get(Config.ServiceUrl + '/items/' + id)
            .toPromise()
            .then(res => {
                return res.json();
            });
    }
}
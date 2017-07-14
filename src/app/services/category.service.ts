import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Config } from '../consts/config.const';

@Injectable()
export class CategoryService {
    
    constructor(private http: Http) { }

    list(): any {
        return this.http.get(Config.ServiceUrl + '/categories')
            .toPromise()
            .then(res => {
                return res.json();
            });
    }
}
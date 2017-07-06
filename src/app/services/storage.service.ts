import 'rxjs/add/operator/toPromise';

import { PLATFORM_ID, Inject, Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class StorageService {

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    set(key: string, data: any): void {
        if (isPlatformBrowser(this.platformId))
            localStorage.setItem(key, JSON.stringify(data));
    }

    get(key: string) {
        if (isPlatformBrowser(this.platformId)) {
            let data = localStorage.getItem(key);
            if (data) {
                return JSON.parse(data);
            }
        }
        return null;
    }

    remove(key: string) {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem(key);
        }
    }
}
import { PLATFORM_ID, Component, OnInit, Inject } from '@angular/core';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';

declare var $: any;

@Component({
    selector: 'demo-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    categories: object[] = [{
        name: 'Clothing'
    }, {
        name: 'Electronics'
    }, {
        name: 'Shoes'
    }, {
        name: 'Watches'
    }, {
        name: 'Jewellery'
    }];

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
        }
    }
}

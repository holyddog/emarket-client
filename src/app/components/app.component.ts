import { PLATFORM_ID, Component, OnInit, Inject } from '@angular/core';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';

import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { CartService } from '../services/cart.service';
import { CategoryService } from '../services/category.service';

declare var $: any;

@Component({
    selector: 'demo-app',
    templateUrl: 'app.component.html',
    styles: [`
        [hidden] { display: none !important; }
        .waiting-panel {
            background-color: #f3f3f3;
            position: fixed;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 10000;
        }
    `]
})
export class AppComponent implements OnInit {
    categories: object[] = [];

    constructor(@Inject(PLATFORM_ID) private platformId: Object, private authService: AuthService, private storageService: StorageService, private cartService: CartService, private categoryService: CategoryService) {}

    ngOnInit(): void {        
        this.cartService.load();
        this.categoryService.list().then(data => this.categories = data);

        if (!this.authService.user) {
            if (this.storageService.get('user')) {
                this.authService.user = this.storageService.get('user');
            }
        }
        
        if (isPlatformBrowser(this.platformId)) {
            $('body').addClass('active');
        }
    }
}

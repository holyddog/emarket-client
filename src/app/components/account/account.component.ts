import { PLATFORM_ID, Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';

import { AuthService } from '../../services/auth.service';

declare var $: any;

@Component({
    selector: 'account-component',
    templateUrl: 'account.component.html',
    styles: [`
        #sidebar {
            width: 260px;
        }
        .menu-item {
            display: block;
            padding: 1rem;            
            border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        }
        .menu-item i {
            color: #9E9E9E !important;
        }
    `]
})
export class AccountComponent implements OnInit {
    constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router, private authService: AuthService) { }

    ngOnInit(): void {
    }

    logOut(): void {
        this.authService.logOut();
        this.router.navigate(['/']);
    }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

declare var $: any;

@Component({
    selector: 'login-component',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    email: string = '';
    password: string = '';
    errMessage: string;

    constructor(private router: Router, private authService: AuthService) { }

    ngOnInit() {
    }

    logIn(): void {
        this.authService.logIn(this.email, this.password).then((data) => {
            if (!data.error) {
                let redirect = this.authService.url ? this.authService.url : '/';
                this.router.navigate([redirect]);
            }
            else {
                this.errMessage = data.error.message;
                $('#msgDialog').modal('show');
            }
        });
    }
}

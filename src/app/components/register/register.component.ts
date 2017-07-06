import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

declare var $: any;

@Component({
    selector: 'register-component',
    templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
    email: string = '';
    password: string = '';
    fname: string = '';
    lname: string = '';
    errMessage: string;

    constructor(private router: Router, private authService: AuthService) { }

    ngOnInit() {
    }

    register(): void {
        this.authService.register(this.email, this.password, this.fname, this.lname).then((data) => {
            if (!data.error) {
                this.router.navigate(['/register-success']);
            }
            else {
                this.errMessage = data.error.message;
                $('#msgDialog').modal('show');
            }
        });
    }
}

@Component({
    selector: 'register-success-component',
    template: `
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="text-center p-4 bg-light-4 shadow-border">Thank you for your registration. Please check your email to activate account.</div>
                </div>
            </div>
        </div>
    `
})
export class RegisterSuccessComponent {

}
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'profile-component',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
    user = null;
    fname: string;
    lname: string;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.user = this.authService.user;
        this.fname = this.user.fname;
        this.lname = this.user.lname;
    }
}
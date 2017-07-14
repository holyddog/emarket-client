import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationExtras } from '@angular/router';

import { CheckoutService } from './checkout.service';

@Injectable()
export class CheckoutGuardService implements CanActivate {
    constructor(private checkoutService: CheckoutService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.checkStep(url);
    }

    checkStep(url: string): boolean {
        if (this.checkoutService.step > 1 && !this.checkoutService.finished) { return true; }

        this.router.navigate(['/checkout']);
        return false;
    }
}
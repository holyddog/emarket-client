import { Component, OnInit } from '@angular/core';

import { AddressService } from '../../../services/address.service';
import { ShopService } from '../../../services/shop.service';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'open-shop-component',
    templateUrl: 'open-shop.component.html'
})
export class OpenShopComponent implements OnInit {
    data: any = {};
    provinces: any[] = [];

    constructor(private shopService: ShopService, private addressService: AddressService, private authService: AuthService) {}

    ngOnInit() {
        this.addressService.provinceList()
            .then(provinces => {
                this.provinces = provinces;
            });
    }

    create(): void  {
        this.shopService.create(this.data).then(data => {
            if (!data.error) {
                this.authService.setShop(data);
            }
        });
    }
}
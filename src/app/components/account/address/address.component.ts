import { Component, OnInit } from '@angular/core';

import { AddressService } from '../../../services/address.service';

@Component({
    selector: 'address-component',
    templateUrl: 'address.component.html',
    styles: [`
        .addr .cmd {
            display: none;
        }
        .addr:hover .cmd {
            display: flex;
        }
    `]
})
export class AddressComponent implements OnInit {
    addrs: any[] = [];
    
    constructor(private addressService: AddressService) {}

    ngOnInit() {
        this.addressService.list().then(data => this.addrs = data);
    }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { AddressService } from '../../../services/address.service';

declare var $: any;

@Component({
    selector: 'address-form-component',
    templateUrl: 'address-form.component.html'
})
export class AddressFormComponent implements OnInit {
    data: any = {};

    provinces: any[] = [];
    loaded: boolean = false;
    addressId: number = null;
    
    errMessage: string = null;

    constructor(private route: ActivatedRoute, private addressService: AddressService) { }

    ngOnInit() {
        this.addressService.provinceList()
            .then(provinces => {
                this.provinces = provinces;

                this.route.params.forEach((params: Params) => {
                    let id: any = params['id'];
                    if (id == 'new') {
                        this.loaded = true;
                    }
                    else {
                        this.addressId = +id;
                        this.addressService.get(+id).then(data => {
                            this.data = data;
                            this.data.province = this.provinces.find(el => el.id == data.province.id);
                            this.loaded = true;
                        });
                    }
                });
            })
    }

    add(): void {
        if (this.addressId) {
            this.addressService.update(this.addressId, this.data).then(data => {
                if (data.error) {                
                    this.errMessage = data.error.message;
                    $('#msgDialog').modal('show');
                }
            });
        }
        else {
            this.addressService.add(this.data).then(data => {
                if (data.error) {                
                    this.errMessage = data.error.message;
                    $('#msgDialog').modal('show');
                }
            });
        }
    }
}
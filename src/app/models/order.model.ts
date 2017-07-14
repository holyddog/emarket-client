import { ItemModel } from './item.model';
import { AddressModel } from './address.model';
import { PaymentOptionModel } from './payment-option.model';

export class OrderItem {
    sprice?: number;
    qty?: number;
    item?: ItemModel;
}

export class OrderModel {
    id?: number;
    no?: string;
    cdate?: number;
    items?: OrderItem[]; // id, name
    popt?: PaymentOptionModel;
    recp?: AddressModel;
}
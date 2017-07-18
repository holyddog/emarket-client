export class ShopModel {
    id?: number;
    name?: string;
    url?: string;
}

export class UserModel {
    id?: number;
    email?: string;
    pwd?: string;
    fname?: string;
    lname?: string;
    token?: string;
    shop?: ShopModel;
}
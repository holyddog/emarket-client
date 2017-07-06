import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ItemQtyElement } from './elements/item-qty.element';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ItemQtyElement
    ],
    providers: [
    ],
    exports: [
        ItemQtyElement
    ]
})
export class SharedModule { }
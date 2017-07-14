import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ItemQtyElement } from './elements/item-qty.element';
import { AutoTextareaElement } from './elements/auto-textarea.element';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ItemQtyElement,
        AutoTextareaElement
    ],
    providers: [
    ],
    exports: [
        ItemQtyElement,
        AutoTextareaElement
    ]
})
export class SharedModule { }
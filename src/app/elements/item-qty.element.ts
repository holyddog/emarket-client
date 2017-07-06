import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'item-qty',
    template: `
        <div class="d-flex flex-row">
            <button type="button" class="mr-2" (click)="inc(-1)">
                <i class="material-icons">remove</i>
            </button>
		    <input class="form-control border text-center" type="text" [(ngModel)]="qty" />
            <button type="button" class="ml-2" (click)="inc(1)">
                <i class="material-icons">add</i>
            </button>
		</div>
    `,
    styles: [`
        :host {           
            position: relative;
            display: inline-block;
        }

        :host input {
            width: 50px;
        }

        :host button {
            width: 36px;
            background-image: none;
            background-color: #eee;
            border: 1px solid rgba(0, 0, 0, 0.12);
            outline: 0;
            cursor: pointer;
        }
    `]
})
export class ItemQtyElement {
    @Input()
    qty: number = 1;

    @Output()
    change: EventEmitter<number> = new EventEmitter<number>();

    inc(val: number): void {
        this.qty += val;
        this.change.emit(this.qty);
    }
}
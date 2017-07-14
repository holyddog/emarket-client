import { PLATFORM_ID, Inject, forwardRef, Component, Output, Input, EventEmitter, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

declare var autosize: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutoTextareaElement),
    multi: true
};

const noop = () => {
};

@Component({
    selector: 'auto-textarea',
    template: `
        <textarea #elm class="{{styleClass}}" rows="1" [(ngModel)]="value"></textarea>
    `,
    styles: [`
        :host {
            resize: none;
        }
    `],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class AutoTextareaElement implements AfterViewInit, ControlValueAccessor { 
    @Input('class')
    styleClass: string;    
    @Input()
    innerValue: string;
    @ViewChild('elm') elm: ElementRef;

    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            autosize(this.elm.nativeElement);
        }
    }

    get value(): any {
        return this.innerValue;
    };

    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}
import { Component, Input, forwardRef } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const nonFn = () => {}; // The function "pointers" can't be null.

export const TEXTBOX_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextboxComponent),
    multi: true
};

@Component({
    selector: 'textbox',
    templateUrl: './textbox.template.html',
    providers: [ TEXTBOX_VALUE_ACCESSOR ],
})

export class TextboxComponent implements ControlValueAccessor {

    @Input() public label?: string;
    @Input() public placeholder?: string;
    @Input() public name?: string;
    isDisabled: boolean = false;

    innerValue: string = '';

    constructor() { }

    onValueChangeCallback: any = nonFn;
    onTouchedCallback: any = nonFn; 

   getModelOptions() {
    return { standalone: true, name: this.name! };

   } 

    writeValue(value: any): void {
        if (value != this.innerValue) {
            this.innerValue = value;
        }
    }
    
    registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
    registerOnChange(fn: any): void { this.onValueChangeCallback = fn; }
    

}
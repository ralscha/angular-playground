import {afterNextRender, Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[appAutoFocus]',
})
export class AutoFocusDirective {
    constructor(private elementRef: ElementRef<HTMLElement>) {
        afterNextRender(() => {
            this.elementRef.nativeElement.focus();
        });
    }
}

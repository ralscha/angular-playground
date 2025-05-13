import {Directive, ElementRef, inject, Renderer2} from '@angular/core';

@Directive({
    selector: '[appTrackHover]',
    host: {
        '(pointerenter)': 'this.showHoverMessage()',
        '(pointerleave)': 'this.removeHoverMessage()'
    }
})
export class TrackHoverDirective {
    readonly #elementRef = inject(ElementRef<HTMLElement>);
    readonly #renderer = inject(Renderer2);
    #tooltip?: HTMLElement;

    protected showHoverMessage() {
        this.#tooltip = this.#renderer.createElement('span');
        this.#renderer.addClass(this.#tooltip, 'hovering');
        this.#tooltip!.textContent = '👋 Hovering!';
        this.#renderer.appendChild(this.#elementRef.nativeElement, this.#tooltip);
    }

    protected removeHoverMessage() {
        if (this.#tooltip) {
            this.#renderer.removeChild(this.#elementRef.nativeElement, this.#tooltip);
            this.#tooltip = undefined;
        }
    }
}

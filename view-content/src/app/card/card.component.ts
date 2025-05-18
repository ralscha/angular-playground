import {Component, contentChild, ElementRef, signal, viewChild} from '@angular/core';

@Component({
    selector: 'app-card',
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css'
})
export class CardComponent {
    protected button = viewChild<ElementRef<HTMLButtonElement>>('btn');
    protected buttonText = signal('');

    protected button2 = contentChild<ElementRef<HTMLElement>>('btn2');

    protected buttonClicked() {
        this.buttonText.set(this.button()?.nativeElement.innerText ?? '');
    }

    protected button2Clicked() {
        this.buttonText.set(this.button2()?.nativeElement.innerText ?? '');
    }
}

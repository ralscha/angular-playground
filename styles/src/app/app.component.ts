import {afterNextRender, Component, ElementRef, inject, Renderer2, signal} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {
    '[style.background]': 'color()'
  }
  /*
  styles: `
    :host {
      display: block;
      color: red;
      padding: 1rem;
      border: solid 2px;
    }
  `
   */
})
export class AppComponent {
  protected warningColor = signal('blue');
  protected content = signal(`
    <h2>This is Title</h2>
    <p>Here is the first line of this message.</p>
    <p>This is the second line of this message.</p>`);
  protected color = signal('#ffff00');
  #renderer = inject(Renderer2);
  #elementRef = inject(ElementRef);

  constructor() {
    afterNextRender(() => {
      const host = this.#elementRef.nativeElement;
      const title = host.querySelector('h2');
      this.#renderer.setStyle(title, 'color', 'red');
    });
  }

  protected setRandomColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    this.color.set(randomColor);
  }
}

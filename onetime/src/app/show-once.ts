import {Directive, effect, inject, input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[showOnce]',
  exportAs: 'showOnce'
})
export class ShowOnce {
  key = input('', {alias: 'showOnce'});
  readonly #templateRef = inject(TemplateRef<unknown>);
  readonly #viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      this.#viewContainerRef.clear();
      const value = localStorage.getItem(this.key());
      if (!value) {
        this.#viewContainerRef.createEmbeddedView(this.#templateRef);
      }
    });
  }

  clear() {
    localStorage.setItem(this.key(), 'true');
    this.#viewContainerRef.clear();
  }

}

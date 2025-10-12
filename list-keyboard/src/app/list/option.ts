import { Highlightable, ListKeyManagerOption } from '@angular/cdk/a11y';
import { Directive, ElementRef, inject, input, signal } from '@angular/core';

@Directive({
  selector: '[appOption]',
  host: { 
    '[class.active]': 'active()',
    '[attr.aria-selected]': 'active() ? true : null',
  }
})
// export class OptionDirective {
export class OptionDirective implements ListKeyManagerOption, Highlightable {
  host = inject(ElementRef);
  readonly label = input('');
  protected readonly active = signal(false);

  focus() { 
    this.host.nativeElement.focus(); 
  }

  // setActive(on: boolean) {
  //   this.active.set(on);
  // }
  
  getLabel() {
    return this.label();
  }

  setActiveStyles() {
    this.active.set(true);
  }

  setInactiveStyles() {
    this.active.set(false);
  }
}
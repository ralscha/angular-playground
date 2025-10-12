import { Component, computed, Signal, signal, viewChildren } from '@angular/core';
import { OptionDirective } from './option';
import { ListKeyManager } from '@angular/cdk/a11y';
import { PEOPLE } from './people';

@Component({
  selector: 'app-list',
  templateUrl: './list.html',
  styleUrl: './list.css',
  imports: [ OptionDirective ]
})
export default class List {
  protected people = PEOPLE;
  protected active = signal(-1);
  protected options: Signal<readonly OptionDirective[]> = viewChildren(OptionDirective);
  private optionElements = computed(() => this.options().map(o => o.host.nativeElement));

  private keyManager?: ListKeyManager<OptionDirective>;

  protected handleClick(event: Event) {
    const i = this.optionElements().indexOf(event.target as HTMLElement);
    if (i < 0) { 
      return;
    }
    this.applyListState(i);

    this.setupKeyManager();
    this.keyManager?.setActiveItem(i);
  }
  
  protected handleKeydown(event: KeyboardEvent) {
    this.setupKeyManager();
    if (this.keyManager) {
      this.keyManager.onKeydown(event);
      const i = this.keyManager.activeItemIndex ?? this.active();
      this.applyListState(i);
    }
  }

  protected handleFocus() {
    this.setupKeyManager();
  }

  private setupKeyManager() {
    if (!this.keyManager) {
      // this.keyManager = new ListKeyManager(this.options());
      this.keyManager = new ListKeyManager(this.options()).withWrap().withHomeAndEnd();
      
      this.keyManager.setActiveItem(0);
      this.applyListState(0);
    }
  }

  private applyListState(index: number) {
    this.active.set(index);
    const nodes = this.optionElements();
    nodes.forEach((el, i) => el.tabIndex = i === index ? 0 : -1);
    nodes[index].focus();

    // this.options().forEach((o, idx) => o.setActive(idx === this.active()));

    this.options().forEach((o, idx) =>
      idx === this.active() ? 
        o.setActiveStyles() : 
        o.setInactiveStyles());
  }
}

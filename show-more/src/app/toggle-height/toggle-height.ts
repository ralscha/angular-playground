import {ChangeDetectionStrategy, Component, ElementRef, input, viewChild} from '@angular/core';

@Component({
  selector: 'app-toggle-height',
  imports: [],
  templateUrl: './toggle-height.html',
  styleUrl: './toggle-height.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.expanded]': 'isExpanded',
    '[style.--collapsedHeight]': 'collapsedHeight()',
    '[style.--expandedHeight]': 'expandedHeight',
  }
})
export class ToggleHeight {
  collapsedHeight = input('50px');
  protected isExpanded = false;
  protected container = viewChild.required<ElementRef>('container');
  protected expandedHeight: string | null = null;

  protected toggle() {
    this.isExpanded = !this.isExpanded;
    this.expandedHeight = this.isExpanded ?
      `${this.container().nativeElement.scrollHeight}px` : null;
  }
}

import {ChangeDetectionStrategy, Component, model} from '@angular/core';

export type ListMode = 'grid' | 'list';

@Component({
  selector: 'app-view-mode-toggle',
  templateUrl: './view-mode-toggle.html',
  styleUrl: './view-mode-toggle.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewModeToggle {
  readonly mode = model<ListMode>('list');

  protected set(mode: ListMode) {
    this.mode.set(mode);
  }

}

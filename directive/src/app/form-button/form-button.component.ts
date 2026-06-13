import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { AutoFocusDirective } from '../auto-focus.directive';
import { TrackHoverDirective } from '../track-hover.directive';
import { DisableOnLoadingDirective } from '../disable-on-loading.directive';

@Component({
  selector: '[appFormButton]',
  imports: [],
  template: ` <ng-content />`,
  styleUrl: './form-button.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  hostDirectives: [
    { directive: AutoFocusDirective },
    { directive: TrackHoverDirective },
    {
      directive: DisableOnLoadingDirective,
      inputs: ['loading'],
    },
  ],
})
export class FormButtonComponent {
  loading = input(false);
}

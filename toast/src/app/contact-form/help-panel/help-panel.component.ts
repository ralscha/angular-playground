import {ChangeDetectionStrategy, Component, output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-help-panel',
  imports: [
    MatButtonModule
  ],
  templateUrl: './help-panel.component.html',
  styleUrl: './help-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpPanelComponent {
  close = output<void>();
}

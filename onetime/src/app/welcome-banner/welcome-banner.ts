import {ChangeDetectionStrategy, Component, output} from '@angular/core';

@Component({
  selector: 'app-welcome-banner',
  imports: [],
  templateUrl: './welcome-banner.html',
  styleUrl: './welcome-banner.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeBanner {
  dismiss = output<void>();
}

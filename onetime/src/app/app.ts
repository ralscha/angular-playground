import {ChangeDetectionStrategy, Component} from '@angular/core';
import {WelcomeBanner} from './welcome-banner/welcome-banner';
import {ShowOnce} from './show-once';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    WelcomeBanner,
    ShowOnce
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
}

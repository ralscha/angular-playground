import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UserDropdown} from './user-dropdown/user-dropdown';

@Component({
  selector: 'app-root',
  imports: [
    UserDropdown
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
}

import {Component} from '@angular/core';
import {SessionTimer} from './session-timer/session-timer';

@Component({
  selector: 'app-root',
  imports: [SessionTimer],
  templateUrl: './app.html'
})
export class App {
}

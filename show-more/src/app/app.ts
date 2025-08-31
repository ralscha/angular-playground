import {Component} from '@angular/core';
import {ToggleHeight} from './toggle-height/toggle-height';

@Component({
  selector: 'app-root',
  imports: [ToggleHeight],
  templateUrl: './app.html'
})
export class App {
}

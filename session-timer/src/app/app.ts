import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SessionTimer } from './session-timer/session-timer';

@Component({
  selector: 'app-root',
  imports: [SessionTimer],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './app.html',
})
export class App {}

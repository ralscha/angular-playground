import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ToggleHeight } from './toggle-height/toggle-height';

@Component({
  selector: 'app-root',
  imports: [ToggleHeight],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './app.html',
})
export class App {}

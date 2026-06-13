import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import List from './list/list';

@Component({
  selector: 'app-root',
  template: ` <app-list /> `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [List],
})
export class App {}

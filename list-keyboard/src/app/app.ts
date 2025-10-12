import { Component, signal } from '@angular/core';
import List from './list/list';

@Component({
  selector: 'app-root',
  template: `
    <app-list />
  `,
  imports: [ List ]
})
export class App {
}

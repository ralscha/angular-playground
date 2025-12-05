import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {UsernameFieldComponent} from "./username-field/username-field.component";

@Component({
  selector: 'app-root',
  template: `
    <app-username-field [(username)]="username" />
    <p>Hello, {{ username() }}!</p>
  `,
  imports: [UsernameFieldComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  protected readonly username = signal('Brian');
}

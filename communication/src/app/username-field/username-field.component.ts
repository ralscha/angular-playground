import {ChangeDetectionStrategy, Component, input, model, output} from '@angular/core';

@Component({
  selector: 'app-username-field',
  imports: [],
  templateUrl: './username-field.component.html',
  styleUrl: './username-field.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsernameFieldComponent {
  readonly username = model("");

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.username.set(value);
  }
}

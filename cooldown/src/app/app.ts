import {Component, signal} from '@angular/core';
import {CooldownButton} from './cooldown-button/cooldown-button';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    CooldownButton,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly message = signal('');
  protected readonly showSuccess = signal(false);

  protected onSubmit(event: Event) {
    event.preventDefault();
    if (!this.message().trim()) {
      return;
    }

    this.showSuccess.set(true);
    setTimeout(() => {
      this.showSuccess.set(false)
      this.message.set('');
    }, 8000);
  }
}

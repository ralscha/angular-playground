import {Component, input, OnDestroy, signal} from '@angular/core';

@Component({
  selector: 'app-cooldown-button',
  imports: [],
  templateUrl: './cooldown-button.html',
  styleUrl: './cooldown-button.css'
})
export class CooldownButton implements OnDestroy {
  readonly disabled = input(false);
  readonly duration = input.required<number>();
  readonly label = input('Send');
  protected cooldownSeconds = signal(0);
  private intervalId: number | null = null;

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  protected handleClick() {
    const end = Date.now() + this.duration() * 1000;
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => {
      const remaining = Math.ceil((end - Date.now()) / 1000);
      this.cooldownSeconds.set(Math.max(0, remaining));
      if (remaining <= 0 && this.intervalId) {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }
}

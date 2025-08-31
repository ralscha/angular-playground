import {Component, computed, DestroyRef, inject, signal} from '@angular/core';

@Component({
  selector: 'app-session-timer',
  imports: [],
  templateUrl: './session-timer.html',
  styleUrl: './session-timer.css'
})
export class SessionTimer {
  readonly total = 15;
  readonly warnAt = 10;
  readonly dangerAt = 5;
  readonly secondsRemaining = signal(this.total);
  readonly formattedRemaining = computed(() =>
    this.formattedTime(this.secondsRemaining()));
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    const timerId = setInterval(() => {
      this.secondsRemaining
        .update(v => Math.max(v - 1, 0));
    }, 1000);


    this.destroyRef.onDestroy(() =>
      clearInterval(timerId));
  }

  private formattedTime(totalSeconds: number): string {
    return new Date(totalSeconds * 1000)
      .toISOString().slice(14, 19);
  }
}

import {computed, Directive, input, signal} from "@angular/core";

@Directive({
  selector: '[stepTracker]',
  exportAs: 'stepper'
})
export class StepTrackerDirective {
  readonly stepLabels = input<string[]>();
  readonly totalSteps = computed(() => this.stepLabels()?.length ?? 0);
  readonly isFirstStep = computed(() => this.stepIndex() === 0);
  readonly isLastStep = computed(() => this.stepIndex() === this.totalSteps() - 1);
  readonly currentLabel = computed(() =>
    this.stepLabels()?.[this.stepIndex()] ?? ''
  );
  readonly #current = signal(0);
  readonly stepIndex = this.#current.asReadonly();

  next() {
    if (!this.isLastStep()) {
      this.#current.update(i => i + 1);
    }
  }

  prev() {
    if (!this.isFirstStep()) {
      this.#current.update(i => i - 1);
    }
  }
}

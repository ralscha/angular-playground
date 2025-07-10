import {Component, signal} from '@angular/core';
import {StepTrackerDirective} from './step-tracker';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [StepTrackerDirective]
})
export class App {
  protected readonly submitted = signal(false);
  protected readonly steps = signal([
    'Enter Your Personal Info',
    'Add Work Details',
    'Confirm & Submit'
  ]);

  protected submit() {
    this.submitted.set(true);
  }

  protected resetForm() {
    this.submitted.set(false);
  }
}

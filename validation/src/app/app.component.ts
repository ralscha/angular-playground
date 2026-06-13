import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  imports: [FormComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.css',
})
export class AppComponent {}

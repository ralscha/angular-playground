import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProfileFormComponent } from './profile-form/profile-form.component';

@Component({
  selector: 'app-root',
  template: ` <app-profile-form /> `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ProfileFormComponent],
})
export class AppComponent {}

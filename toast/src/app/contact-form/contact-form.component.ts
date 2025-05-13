import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HelpPanelComponent} from './help-panel/help-panel.component';

@Component({
  selector: 'app-contact-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HelpPanelComponent
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {
  protected contactForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    message: new FormControl<string>('', Validators.required)
  });

  protected showHelpPanel = signal(false);

  #snackbar = inject(MatSnackBar);

  protected submitForm() {
    if (this.contactForm.valid) {
      this.#snackbar.open('Form submitted successfully!', 'Dismiss', {
        duration: 9000,
        panelClass: ['snackbar-success'],
      });
      this.contactForm.reset();
    } else {
      const snackBarRef = this.#snackbar.open('Please fill out all required fields.', 'Help', {
        panelClass: ['snackbar-error'],
      });
      snackBarRef.onAction().subscribe({
        next: () => this.showHelpPanel.set(true),
      });
    }
  }

  protected closeHelpPanel() {
    this.showHelpPanel.set(false);
  }
}

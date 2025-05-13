import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {DialogRef} from "@angular/cdk/dialog";

interface SignUpForm {
  name: FormControl<string>;
  email: FormControl<string>;
}

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpFormComponent {
  readonly #dialogRef = inject(DialogRef, { optional: true });

  protected signUpForm = new FormGroup<SignUpForm>({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email
      ]
    })
  });

  protected closeModal() {
    this.#dialogRef?.close();
  }
}

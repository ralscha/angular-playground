import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

interface SignUpForm {
    name: FormControl<string>;
    email: FormControl<string>;
}

@Component({
    selector: 'app-form',
    imports: [ReactiveFormsModule],
    templateUrl: './form.component.html',
    styleUrl: './form.component.css'
})
export class FormComponent {
    protected form = new FormGroup<SignUpForm>({
        name: new FormControl<string>('', {
            nonNullable: true,
            validators: [Validators.required]
        }),
        email: new FormControl<string>('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.email
            ]
        }),
    });
}

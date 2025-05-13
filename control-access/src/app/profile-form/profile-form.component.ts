import {Component} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RatingStarsComponent} from '../rating-stars/rating-stars.component';

@Component({
    selector: 'app-profile-form',
    templateUrl: './profile-form.component.html',
    styleUrl: './profile-form.component.css',
    imports: [ReactiveFormsModule, RatingStarsComponent, JsonPipe]
})
export class ProfileFormComponent {
    protected form = new FormGroup({
        name: new FormControl('', {validators: Validators.required, nonNullable: true}),
        rating: new FormControl(
            {
                value: 0,
                disabled: false
            },
            {
                validators: Validators.min(0),
                nonNullable: true
            })
    });

    protected submit() {
        console.log('Form submitted', this.form.value);
    }
}

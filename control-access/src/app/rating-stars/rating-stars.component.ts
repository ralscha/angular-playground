import {Component, input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-rating-stars',
    templateUrl: './rating-stars.component.html',
    styleUrl: './rating-stars.component.css',
})
export class RatingStarsComponent {
    control = input.required<FormControl<number>>();
    protected stars = [1, 2, 3, 4, 5];

    protected rate(star: number) {
        this.control().setValue(star);
        this.control().markAsDirty();
        this.control().markAsTouched();
    }

    protected resetRating() {
        this.control().reset();
        this.control().updateValueAndValidity();
    }

}

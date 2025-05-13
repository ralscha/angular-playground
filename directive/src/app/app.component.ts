import {Component, signal} from '@angular/core';
import {FormButtonComponent} from './form-button/form-button.component';

@Component({
    selector: 'app-root',
    template: `
        <form>
            <header>
                <h2>Sign Up</h2>
                <em>Hello! Welcome to the family.</em>
            </header>
            <div>
                <label>
                    <strong>Name</strong>
                    <input type="text" autocomplete="off"/>
                </label>
            </div>
            <div>
                <label>
                    <strong>Email Address</strong>
                    <input type="email" autocomplete="off"/>
                </label>
            </div>
            <button type="button" appFormButton [loading]="isSaving()" (click)="handleClick()">
                Save
            </button>
        </form>
        @if (saveStatus()) {
            <p>✅ {{ saveStatus() }}</p>
        }
    `,
    imports: [FormButtonComponent]
})
export class AppComponent {
    protected isSaving = signal(false);
    protected saveStatus = signal("");

    protected handleClick() {
        this.saveStatus.set("");
        this.isSaving.set(true);
        setTimeout(() => {
            this.isSaving.set(false);
            this.saveStatus.set('Data saved successfully!');
        }, 4000);
    }
}


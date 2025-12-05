import {Component} from '@angular/core';
import {ProfileFormComponent} from "./profile-form/profile-form.component";

@Component({
    selector: 'app-root',
    template: `
        <app-profile-form />
    `,
    imports: [ProfileFormComponent]
})
export class AppComponent {
}

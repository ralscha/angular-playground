import {Component} from '@angular/core';
import {ContactFormComponent} from './contact-form/contact-form.component';

@Component({
  selector: 'app-root',
  imports: [
    ContactFormComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {

}

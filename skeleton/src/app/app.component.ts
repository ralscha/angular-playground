import { Component } from '@angular/core';
import {ProfileCardComponent} from "./profile-card/profile-card.component";

@Component({
  selector: 'app-root',
  imports: [
    ProfileCardComponent
  ],
  template: `
    <app-profile-card></app-profile-card>
    <app-profile-card></app-profile-card>
    <app-profile-card></app-profile-card>
  `,
  styles: [],
})
export class AppComponent {
}

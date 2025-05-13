import {ChangeDetectionStrategy, Component, effect, inject} from '@angular/core';
import {ProfileService} from "../profile.service";
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        animate('900ms ease-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ProfileCardComponent {
  #profileService = inject(ProfileService);
  protected profile = this.#profileService.profile;

  constructor() {
    effect(() => {
      if (!this.profile()) {
        this.#profileService.loadProfile();
      }
    });
  }
}

import {animate, style, transition, trigger} from '@angular/animations';

export const enterLeaveAnimation = trigger('enterLeaveAnimation', [
  transition(':enter', [
    style({opacity: 0, transform: 'scale(0.8)'}),
    animate('500ms ease-in', style({opacity: 1, transform: 'scale(1)'}))
  ]),
  transition(':leave', [
    style({opacity: 1, transform: 'scale(1)'}),
    animate('500ms ease-in', style({opacity: 0, transform: 'scale(0.8)'}))
  ]),
]);

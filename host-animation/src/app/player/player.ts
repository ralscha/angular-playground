import {Component, input} from '@angular/core';
import {DecimalPipe, PercentPipe} from '@angular/common';
import {enterLeaveAnimation} from '../animation';
import {Player} from '../players';

@Component({
  selector: 'app-player',
  templateUrl: './player.html',
  styleUrl: './player.css',
  imports: [DecimalPipe, PercentPipe],
  animations: [
    enterLeaveAnimation
  ],
  host: {
    '[@enterLeaveAnimation]': '',
    '(@enterLeaveAnimation.start)': 'start()',
    '(@enterLeaveAnimation.done)': 'done()'
  }
})
export class PlayerComponent {
  readonly player = input.required<Player>();

  protected start() {
    document.body.style.backgroundColor = 'yellow';
  }

  protected done() {
    document.body.style.backgroundColor = 'white';
  }
}

import {Component} from '@angular/core';
import {players} from './players';
import {PlayerComponent} from './player/player';

@Component({
  selector: 'app-root',
  imports: [
    PlayerComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected players = [players[0]];
  protected totalCount = players.length;

  addPlayer() {
    const nextPlayer = players[this.players.length];
    this.players.push(nextPlayer);
  }

  removePlayer() {
    this.players.splice(-1);
  }

}

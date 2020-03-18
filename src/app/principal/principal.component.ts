import { Component, OnInit } from '@angular/core';
import { Player } from '../list-players/player';
import { Observable } from 'rxjs';
import { PlayerService } from '../list-players/player.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  player : Player
  players : Observable<any>
  nome : string
  key : string = ''

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.player = new Player()
    this.players = this.playerService.getAll()
  }

}

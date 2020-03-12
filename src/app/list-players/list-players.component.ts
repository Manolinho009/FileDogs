import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {

  player : Player
  players : Observable<any>

  constructor(private playerService : PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getAll()
  }

  onclick(){
    this.player = new Player
    this.player.nome = "aaa"
    this.player.status = 'BBB'
    this.playerService.insert(this.player)
  }
}

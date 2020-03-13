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
  nome : string

  constructor(private playerService : PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getAll()
  }

  login(){
    this.player = new Player()
    this.player.nome = this.nome
    this.playerService.insert(this.player)
  }

}

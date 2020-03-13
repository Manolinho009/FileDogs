import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './player';
import { PlayerService } from './player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {

  player : Player
  players : Observable<any>
  nome : string
  key : string = ''

  constructor(private playerService : PlayerService) { }

  ngOnInit() {
    this.player = new Player()
    this.players = this.playerService.getAll()
  }

  // login(){
  //   this.player = new Player()
  //   this.player.nome = "aa"//this.nome
  //   this.playerService.insert(this.player)
  // }

  login(){
    this.playerService.insert(this.player)
    console.log("pipop"+this.player.nome)
    this.player = new Player()
  }
  
}

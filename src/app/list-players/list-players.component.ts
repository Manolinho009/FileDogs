import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './player';
import { PlayerService } from './player.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Sala } from '../salas/sala';

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
  sala: Sala
  constructor(private playerService: PlayerService,private route: ActivatedRoute){ }

  ngOnInit() {
    this.player = new Player()
    this.sala = new Sala()
    this.sala.id = this.route.snapshot.paramMap.get('sala')
    this.players = this.playerService.getAll(this.sala.id)
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

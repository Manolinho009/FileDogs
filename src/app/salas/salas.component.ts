import { Component, OnInit } from '@angular/core';
import { Player } from '../list-players/player';
import { Observable } from 'rxjs';
import { PlayerService } from '../list-players/player.service';
import { SalaService } from './sala.service';
import { Sala } from './sala';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  player : Player
  sala: Sala
  salas : Observable<any>

  nome : string
  key : string = ''

  constructor(private playerService : PlayerService,private salaService: SalaService) { }

  ngOnInit() {
    this.player = new Player()
    this.sala = new Sala()
    this.salas = this.salaService.getAll()
  }

  // login(){
  //   this.player = new Player()
  //   this.player.nome = "aa"//this.nome
  //   this.playerService.insert(this.player)
  // }

  login(key:any){  
    this.sala.id = key
    console.log(key)
    this.salaService.insertPlayer(this.player,this.sala)
    console.log("pipop"+this.player.nome)
    this.player = new Player()
  }
}

import { Component, OnInit } from '@angular/core';
import { Player } from '../list-players/player';
import { Observable } from 'rxjs';
import { PlayerService } from '../list-players/player.service';
import { SalaService } from './sala.service';
import { Sala } from './sala';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  player : Player
  sala: Sala
  salas : Observable<any>
  players : Observable<any>

  nome : string
  key : string = ''

  constructor(private playerService : PlayerService,private route: ActivatedRoute,private salaService: SalaService) { }

  ngOnInit() {
    this.player = new Player()
    this.sala = new Sala()
    this.salas = this.salaService.getAll()
    this.players = this.playerService.getAll(this.route.snapshot.paramMap.get('sala'))
  }

  // login(){
  //   this.player = new Player()
  //   this.player.nome = "aa"//this.nome
  //   this.playerService.insert(this.player)
  // }

  login(key: any){  
    window.alert(key)
    this.sala.id = key
    this.player.id = this.salaService.insertPlayer(this.player,this.sala)
    console.log(this.player.id)
    window.alert(this.player.id)
    console.log("pipop"+this.player.nome)
    console.log("pipop"+key)
  }
}

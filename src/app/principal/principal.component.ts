import { Component, OnInit } from '@angular/core';
import { Player } from '../list-players/player';
import { Observable } from 'rxjs';
import { PlayerService } from '../list-players/player.service';
import {Router, Resolve,RouterStateSnapshot,ActivatedRouteSnapshot, ActivatedRoute}from '@angular/router';
import { Sala } from '../salas/sala';
import { SalaService } from '../salas/sala.service';

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
  sala: Sala
  imgUrl: string = ''
  constructor(private playerService: PlayerService,private route: ActivatedRoute,private salaService : SalaService){ }

  ngOnInit() {
    this.player = new Player()
    this.sala = new Sala()
    this.sala.id = this.route.snapshot.paramMap.get('sala')
    console.log(this.sala.id)
    this.imgUrl = this.sala.fundoUrl
    this.players = this.playerService.getAll(this.sala.id)
  }

}

import { Component, OnInit } from '@angular/core';
import { Player } from '../list-players/player';
import { Observable } from 'rxjs';
import { PlayerService } from '../list-players/player.service';
import {Router, Resolve,RouterStateSnapshot,ActivatedRouteSnapshot, ActivatedRoute}from '@angular/router';
import { Sala } from '../salas/sala';

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
  constructor(private playerService: PlayerService,private route: ActivatedRoute){ }

  ngOnInit() {
    this.player = new Player()
    this.sala = new Sala()
    this.sala.id = this.route.snapshot.paramMap.get('id')
    console.log(this.sala.id)
    this.players = this.playerService.getAll(this.sala.id)
  }

}

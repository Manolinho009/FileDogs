import { Component, OnInit } from '@angular/core';
import { DadoService } from './dado.service';
import { Dado } from './dado';
import { DadoDataService } from './dado-data.service';
import { Sala } from '../salas/sala';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../list-players/player';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  sides = 20 
  numero: number = 0
  sala: Sala
  player: Player

  dado : Dado
  key: string = ''
  constructor(private dadoService: DadoService,private dadoDataService: DadoDataService,private route: ActivatedRoute) { }

  ngOnInit(){
    this.dado = new Dado()
    this.sala = new Sala()
    // this.dado.valor = this.numero
    this.sala.id = this.route.snapshot.paramMap.get('id')
    console.log(this.sala.id)
    
  }
  

  roll(){
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    this.numero = randomNumber
    console.log(randomNumber)
    this.dado.valor = this.numero
    this.sala.id = this.route.snapshot.paramMap.get('id')
    console.log(this.sala.id)
    this.dadoService.update(this.dado,"dado1",this.sala)

  } 
}

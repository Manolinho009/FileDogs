import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  sides = 20 
  numero: number

  constructor() { }

  ngOnInit(): void {
  }
  

  roll(){
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    this.numero = randomNumber
    console.log(randomNumber)
  } 
}

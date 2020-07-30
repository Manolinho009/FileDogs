import { Component, OnInit } from '@angular/core';
import { Gustavo } from './gustavo';
import { GustavoService } from './gustavo.service';
import { element } from 'protractor';
import { from } from 'rxjs';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-gustavo',
  templateUrl: './gustavo.component.html',
  styleUrls: ['./gustavo.component.css']
})
export class GustavoComponent implements OnInit {

  nome_jogador:any;

  public lista_campos: any[] = [{ id: 1 , valor: '', campo: ''}];

  constructor(private gustavoService:GustavoService ) { }


  ngOnInit(){
  }

  insert(){
    
    let observable = from(this.lista_campos)
      .subscribe(ficha =>
      this.gustavoService.insertFicha(this.nome_jogador,ficha)
       );
  }


  add(){

    this.lista_campos.push({id: this.lista_campos.length + 1,
    valor: '',  campo: ''})

    console.log(this.lista_campos)
    // var inputs = document.getElementById("inputs")
    // var input = document.createElement("input")
    // var item = document.createElement("li")
    // input.placeholder = this.campo
    // input.className ='form-control inputtiti'
    // input.name = "1"
    // item.className = 'list-group-item'
    // item.appendChild(input)
    // inputs.appendChild(item)
  }

  remover(i: number) {
    this.lista_campos.splice(i, 1);
  }

  log(){
    console.log(this.lista_campos)
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-software3',
  templateUrl: './teste-software3.component.html',
  styleUrls: ['./teste-software3.component.css']
})
export class TesteSoftware3Component implements OnInit {

  constructor() { }
  ngOnInit(){
  }

  codigo:any

  preco:any
  unidade:any

  peso: any

  altura: any


  procedencia(){

    var texto = document.getElementById("textolegal")
    console.log("TESTE")
  switch(this.codigo){
    case "1":
      texto.innerHTML = "<div style='background-color : unset'>Norte</div>"
      alert("Norte")
      break;
    case "2":
      texto.innerHTML = "<div style='background-color : unset'>Sul</div>"
      alert("Sul")
      break;
    case "3":
      texto.innerHTML = "<div style='background-color : unset'>Leste</div>"
      alert("Leste")
      break;
    case "4":
      texto.innerHTML = "<div style='background-color : unset'>Oeste</div>"
      alert("Oeste")
      break;
    default:
      texto.innerHTML = "<div style='background-color : red'>Erro</div>"
  }

  }

  potencia(){

    var valor = parseFloat(this.peso) * parseFloat(this.preco)

    document.getElementById("preco").innerHTML = "Total : "+valor + this.unidade
  }
}
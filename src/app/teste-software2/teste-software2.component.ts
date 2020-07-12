import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-software2',
  templateUrl: './teste-software2.component.html',
  styleUrls: ['./teste-software2.component.css']
})
export class TesteSoftware2Component implements OnInit {

  constructor() { }

  ngOnInit(){
  }

  codigo:any
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

  imc(){
    var a = parseFloat(this.altura) * parseFloat(this.altura) 
    var b = parseFloat(this.peso)
    var c = a/b

  document.getElementById("result").innerHTML = "Resultado :"+c
  }
}

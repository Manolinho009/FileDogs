import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifs',
  templateUrl: './ifs.component.html',
  styleUrls: ['./ifs.component.css']
})
export class IfsComponent implements OnInit {

  nota1:number
  nota2:number
  notafinal:number
  status:any

  numero1:any
  numero2:any

  sexo:any

  idade:any

  tipo:any
  constructor() { }

  ngOnInit(): void {
  }

  calcularnota(nota1:any , nota2:any){
    this.notafinal = (parseFloat(nota1) + parseFloat(nota2))/2
    
    if(this.notafinal <= 6){
      this.status = "Exame"

      var nota = prompt("Porfavor digite a nota do Exame");
      var newnota = (this.notafinal + parseInt(nota))/2
      if (newnota >= 6 ) {
        alert("Aprovado")
        this.notafinal = newnota
      } else {
        alert("Reprovado")
        this.notafinal = newnota
      }

    }
    if(this.notafinal >= 6){
      this.status = "Aprovado"
    }
  }

  numero(numero: number){
    if(numero == 0){
      this.tipo = "O numero é 0"
    }
    if(numero < 0){
      this.tipo = "O numero é MENOR que 0"
    }
    if(numero > 0){
      this.tipo = "O numero é MAIOR que 0"
    }
  }

  numeromaior(numero1:number, numero2:number){
    if(numero1 > numero2){return numero1}
    else if(numero1 < numero2){return numero2}
    else if(numero1 == numero2){return "São Iguais"}
  }

  sexoselector(sexo:any){
    if(sexo == "M" || sexo == "m"){return "Sexo Masculino"}
    else if (sexo == "F" || sexo == "f"){return "Sexo Feminino"}
    else{return "Sexo Indentificavel"}
  }

  classificador(idade:any){
    if(idade <= 10){return "Infantil"}
    if(idade >= 11 && idade <= 13){return "Infanto juvenil"}
    if(idade >= 14 && idade <= 17){return "Juvenil"}
    if(idade >= 18){return "Adulto"}
  }
}

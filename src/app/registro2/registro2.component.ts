import { Component, OnInit } from '@angular/core';
import { Registro2 } from './registro2';
import { Observable } from 'rxjs';
import { Registro2Service } from './registro2.service';

@Component({
  selector: 'app-registro2',
  templateUrl: './registro2.component.html',
  styleUrls: ['./registro2.component.css']
})
export class Registro2Component implements OnInit {

  valor1: any
  valor2: any

  media:number
  nota1:any
  nota2:any
  sum:number

  peso:any
  altura:any
  imc:any

  agencia:any
  conta:any
  operacao:any
  valor:any
  saldoAtual:any

  password:any
  user:any

  velocidade:any
  multa:any

  registros: Observable<any>
  bancos: Observable<any>

  registro2: Registro2

  constructor(private registroService: Registro2Service) { }

  ngOnInit(){
    this.registro2 = new Registro2()
    this.registros = this.registroService.getAll()
    this.bancos = this.registroService.getbc()
  }


  calcular(){
    this.sum = parseInt(this.nota1) + parseInt(this.nota2)
    console.log(this.sum)
    this.media = this.sum/2
  }

  calcularimc(){
    this.imc = this.peso / (this.altura * this.altura)
  }

  deposito(valor:any,saldo:any){

    if(this.agencia == "2525" && this.conta == "404040" && this.operacao == "013"){
    const registro = new Registro2()
    registro.valorbc = parseInt(valor) + parseInt(saldo)

    this.registroService.update(registro, 'conta1')
    }else{
      alert("Erro ao verificar as credenciais")
    }
  }
  saque(valor:any,saldo:any){
    const registro = new Registro2()
    registro.valorbc = parseInt(valor) - parseInt(saldo)

    this.registroService.update(registro, 'conta1')
    }

    
  login(){
    if(this.user == "fulanodesouza" && this.password == "fulano1234"){
      alert("Login Efetuado")
    }
  }

  carro(){
    const a = this.velocidade - 80
    const b = a * 10
    this.multa = b
  }

  onClick(){
    this.registro2.valor1 = this.valor1
    this.registro2.valor2 = this.valor2

    this.registroService.insert(this.registro2)
    console.log(this.registro2.valor1)
  }
}

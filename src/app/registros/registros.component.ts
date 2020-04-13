import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from './registro';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  valor1: any
  valor2: any

  registros: Observable<any>

  registro: Registro

  constructor(private registroService: RegistroService) { }

  ngOnInit(){
    this.registro = new Registro()
    this.registros = this.registroService.getAll()
  }


  onClick(){
    this.registro.valor1 = this.valor1
    this.registro.valor2 = this.valor2

    this.registroService.insert(this.registro)
    console.log(this.registro.valor1)

  }
}

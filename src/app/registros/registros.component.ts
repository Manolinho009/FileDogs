import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from './registro';
import { RegistroService } from './registro.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  valor1: any
  valor2: any

  total:number

  codigo:any 

  registros: Observable<any>

  registro: Registro

  registros2: Observable<any>

  registro2: Registro

  constructor(private registroService: RegistroService) { }

  ngOnInit(){
    this.registro = new Registro()
    this.registro2 = new Registro()
    this.registros = this.registroService.getAll()
    this.registros2 = new Observable()
    this.total = 0
  }


  onAdd(key : string){
    this.total ++

    this.registroService.find(key,this.registro)
    this.registros2.pipe(map(registros => {
      registros.push(this.registro2);
      return registros;
    }));  
    
    console.log(this.registro2.valor1)
  }

  onClick(){
    this.registro.valor1 = this.valor1
    this.registro.valor2 = this.valor2
    
    console.log(this.registros.pipe.length)
    this.registroService.insert(this.registro)
    console.log(this.registro.valor1)
  }
}

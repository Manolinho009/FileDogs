import { Injectable } from '@angular/core';
import { Dado } from './dado';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadoDataService {

  private dadoSource = new BehaviorSubject({    dado : null, key: '' })

  currentDado = this.dadoSource.asObservable();


  constructor() { }

  changeDado(dado : Dado, key : string){
    this.dadoSource.next({dado : dado, key : key})
  }
}

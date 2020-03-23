import { Injectable } from '@angular/core';
import { Dado } from './dado';
import { Sala } from '../salas/sala';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DadoService {

  constructor(private db: AngularFireDatabase) { }

  insert(dado : Dado,sala : Sala){
    this.db.list('salas/'+sala.id +'/dados').push(dado)
    .then((result : any ) =>{
      console.log(result.key);
    })
  }

  update(dado : Dado, key : string,sala : Sala){
    this.db.list('salas/'+sala.id +'/dados').update(key, dado)
    .catch((error : any) => {
      console.log(error)
    })
  }
}

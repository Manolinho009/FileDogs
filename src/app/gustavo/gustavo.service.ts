import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Gustavo } from './gustavo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GustavoService {

  constructor(private db: AngularFireDatabase) { }

  insertFicha(nome:any, array:any[]){
    this.db.list('gustavo/ficha/'+nome).push(array)
    .then((result : any ) =>{
      console.log(result.key);
    })
  }

  

  insertCampo(gustavo : Gustavo){
    this.db.list('gustavo/ficha/campo').push(gustavo)
    .then((result : any ) =>{
      console.log(result.key);
    })
  }

  getAll(){
    return this.db.list('gustavo/ficha').snapshotChanges().pipe(
      map(changes => {
        return changes.map(c =>({ key : c.payload.key, ...(c.payload.val() as {})}))
      })
    )
  }

  update(gustavo : Gustavo, key : string){
    this.db.list('gustavo/ficha').update(key, gustavo)
    .catch((error : any) => {
      console.log(error)
    })
  }
 
  delete(key : String){
    this.db.object(`registros/${key}`).remove()
  }
}

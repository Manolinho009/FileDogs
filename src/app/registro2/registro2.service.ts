import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Registro2 } from './registro2';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Registro2Service {


  constructor(private db: AngularFireDatabase) { }

  insert(registro2 : Registro2){
    this.db.list('registro2').push(registro2)
    .then((result : any ) =>{
      console.log(result.key);
    })
  }

  insertbc(registro2 : Registro2){
    this.db.list('registro2/banco').push(registro2)
    .then((result : any ) =>{
      console.log(result.key);
    })
  }

  getAll(){
    return this.db.list('registro2').snapshotChanges().pipe(
      map(changes => {
        return changes.map(c =>({ key : c.payload.key, ...(c.payload.val() as {})}))
      })
    )
  }

  getbc(){
    return this.db.list('registro2/banco').snapshotChanges().pipe(
      map(changes => {
        return changes.map(c =>({ key : c.payload.key, ...(c.payload.val() as {})}))
      })
    )
  }
  
  update(registro2 : Registro2, key : string){
    this.db.list('registro2/banco').update(key, registro2)
    .catch((error : any) => {
      console.log(error)
    })
  }
 
  delete(key : String){
    this.db.object(`registros/${key}`).remove()
  }
}
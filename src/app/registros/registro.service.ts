import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Registro } from './registro';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {


  constructor(private db: AngularFireDatabase) { }

  insert(registro : Registro){
    this.db.list('registro').push(registro)
    .then((result : any ) =>{
      console.log(result.key);
    })
  }

  getAll(){
    return this.db.list('registro').snapshotChanges().pipe(
      map(changes => {
        return changes.map(c =>({ key : c.payload.key, ...(c.payload.val() as {})}))
      })
    )
  }

  delete(key : String){
    this.db.object(`registros/${key}`).remove()
  }
}
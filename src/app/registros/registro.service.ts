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
    this.db.list('registro/produto').push(registro)
    .then((result : any ) =>{
      console.log(result.key);
    })
  }

  getAll(){
    return this.db.list('registro/produto').snapshotChanges().pipe(
      map(changes => {
        return changes.map(c =>({ key : c.payload.key, ...(c.payload.val() as {})}))
      })
    )
  }

  find(key : String,registro : Registro){
    this.db.list(`registros/produto/${key}`).push(registro)
  }
}
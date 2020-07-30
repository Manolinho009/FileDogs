import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { Gustavo } from './gustavo';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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

  // getAll(){
  //   return this.db.list('gustavo/ficha').snapshotChanges().pipe(
  //     map(changes => {
  //       return changes.map(c =>({ key : c.payload.key, ...(c.payload.val() as {})}))
  //     })
  //   )
  // }

  getAll() : Observable<AngularFireAction<firebase.database.DataSnapshot>[]> {
    return this.db.list('gustavo/ficha', ref => ref.orderByChild('key')).snapshotChanges()    
  }

  getFicha(key:any) : Observable<AngularFireAction<firebase.database.DataSnapshot>[]> {
    return this.db.list('gustavo/ficha/'+key, ref => ref.orderByChild('key')).snapshotChanges()    
  }


  // getFicha(key:any){
  //   return this.db.list('gustavo/ficha/'+key).snapshotChanges().pipe(
  //     map(changes => {
  //       return changes.map(c =>({ key : c.payload.key, ...(c.payload.val() as {})}))
  //     })
  //   )
  // }

  delete(key : String){
    this.db.object(`registros/${key}`).remove()
  }
}

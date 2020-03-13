import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Player } from './player';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private db: AngularFireDatabase) { }

  insert(player : Player){
    this.db.list('sala/players').push(player)
    .then((result : any ) =>{
      console.log(result.key);
    })
  }

  update(player : Player, key : string){
    this.db.list('sala/players').update(key, player)
    .catch((error : any) => {
      console.log(error)
    })
  }

  getAll(){
    return this.db.list('sala/players').snapshotChanges().pipe(
      map(changes => {
        return changes.map(c =>({ key : c.payload.key, ...c.payload.val()}))
      })
    )
  }

  delete(key : String){
    this.db.object(`sala/players/${key}`).remove()
  }
}

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Player } from './player';
import { map } from 'rxjs/operators';
import { Sala } from '../salas/sala';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private db: AngularFireDatabase) { }

  insert(player : Player){
    this.db.list('salas/players').push(player)
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

  getAll(id :string){
    return this.db.list('salas/'+id+'/players').snapshotChanges().pipe(
      map(changes => {
        return changes.map(c =>({ key : c.payload.key, ...(c.payload.val() as {})}))
      })
    )
  }

  delete(key : String){
    this.db.object(`sala/players/${key}`).remove()
  }
}

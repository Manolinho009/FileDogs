import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Player } from '../list-players/player';
import { Sala } from './sala';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  constructor(private db: AngularFireDatabase) { }

  insert(sala : Sala){
    this.db.list('sala').push(sala)
    .then((result : any ) =>{
      console.log(result.key);
    })
  }

  insertPlayer(player: Player, sala: Sala){
    this.db.list('salas/'+sala.id +'/players').push(player)
    .then((result : any ) =>{
      console.log(result.key);
    })
  }

  update(sala : Sala, key : string){
    this.db.list('salas/'+sala.id +'/players').update(key, sala)
    .catch((error : any) => {
      console.log(error)
    })
  }

  getAll(){
    return this.db.list('salas').snapshotChanges().pipe(
      map(changes => {
        return changes.map(c =>({ key : c.payload.key, ...(c.payload.val() as {})}))
      })
    )
  }

  delete(key : String){
    this.db.object(`salas/${key}`).remove()
  }
}

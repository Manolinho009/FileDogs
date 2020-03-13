import { Observable } from 'rxjs'
import { Player } from '../list-players/player'

export class Sala {
    nome:string
    numeroPlayers: number
    players: Observable<Player>
    id: any
}

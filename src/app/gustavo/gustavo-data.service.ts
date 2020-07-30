import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Gustavo } from './gustavo';

@Injectable({
  providedIn: 'root'
})
export class GustavoDataService {
  
  private gustavoSource = new BehaviorSubject({    gustavo : null, key: '' })

  currentGustavo = this.gustavoSource.asObservable();


  constructor() { }

  changeGustavo(gustavo : Gustavo, key : string){
    
    this.gustavoSource.next({gustavo : gustavo, key : key})
  }
}

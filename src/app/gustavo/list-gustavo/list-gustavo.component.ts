import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GustavoService } from '../gustavo.service';
import { Gustavo } from '../gustavo';
import { GustavoDataService } from '../gustavo-data.service';

@Component({
  selector: 'app-list-gustavo',
  templateUrl: './list-gustavo.component.html',
  styleUrls: ['./list-gustavo.component.css']
})
export class ListGustavoComponent implements OnInit {

  fichas:Observable<any>;
  campos:any[];

  constructor(private gustavoService: GustavoService, private gustavoDataService: GustavoDataService) { }

  ngOnInit(){
    this.fichas = this.gustavoService.getAll()
    
    this.fichas.subscribe(i=>{
      console.log(i)
      this.campos.push(i)
    })

  }
  

  
  log(){
    this.fichas.subscribe(i=>{
      console.log(i)
      
    })
  }
  
  change(gustavo:Gustavo ,key : string){
    
    this.gustavoDataService.changeGustavo(gustavo,key)



    // console.log(gustavo)
    console.log(key)
  }



}

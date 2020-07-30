import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GustavoService } from '../gustavo.service';

@Component({
  selector: 'app-list-gustavo',
  templateUrl: './list-gustavo.component.html',
  styleUrls: ['./list-gustavo.component.css']
})
export class ListGustavoComponent implements OnInit {

  fichas:Observable<any>;
  campos:Observable<any>;

  teste:any
  constructor(private gustavoService: GustavoService) { }

  ngOnInit(){
    this.fichas = this.gustavoService.getAll()
    
    this.log()
  }
  

  
  log(){
    console.log(this.teste);
    this.fichas.subscribe(i=>{
      console.log(i)
    })
  }



}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GustavoService } from '../gustavo.service';
import { GustavoDataService } from '../gustavo-data.service';

@Component({
  selector: 'app-gustavo-ficha',
  templateUrl: './gustavo-ficha.component.html',
  styleUrls: ['./gustavo-ficha.component.css']
})
export class GustavoFichaComponent implements OnInit {

  key: any
  fichas:Observable<any>
  campos:Observable<any>
  constructor(private gustavoService: GustavoService , private gustavoDataService: GustavoDataService) { }

  ngOnInit() {
    this.gustavoDataService.currentGustavo.subscribe(i=>{
      console.log(i)
      this.key = i
    })

    this.fichas = this.gustavoService.getFicha(this.key.key)
  
    this.fichas.subscribe(i=>{
      this.campos = i
      console.log(i)
    })
  }

}

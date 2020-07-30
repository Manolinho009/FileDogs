import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lampada',
  templateUrl: './lampada.component.html',
  styleUrls: ['./lampada.component.css']
})
export class LampadaComponent implements OnInit {

  constructor() { }

  lampadaSrc: any
  status: any = 0

  ngOnInit(){
    this.lampadaSrc = "/assets/lampada_desligada.png"
  }

  clickLampada(){
    console.log("Click " + this.status)
    var status = this.status % 2

    if(this.status >= 10){
      this.lampadaSrc = "/assets/lampada_quebrada.jpg.png"
    }
    else if(status == 0){
      this.lampadaSrc = "/assets/lampada_ligada.jpg.png"
    }
    else{
      this.lampadaSrc = "/assets/lampada_desligada.png"
    }

    this.status += 1

  }
}

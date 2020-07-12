import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-software',
  templateUrl: './teste-software.component.html',
  styleUrls: ['./teste-software.component.css']
})
export class TesteSoftwareComponent implements OnInit {

  constructor() { }

  ngOnInit(){
  }

  verificacao(text: any) {

    if (text == null || text == ""){
      window.alert("Preencha todos os campos")
    }
  }

}

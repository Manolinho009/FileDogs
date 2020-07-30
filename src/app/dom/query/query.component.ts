import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  
  nome:any
  options:any = {maxLines: 1000, printMargin: false};
  public text:string = "var classe = document.querySelector('.myclass');"


  constructor() { }
  @ViewChild('editor') public editor;
  
  ngOnInit(): void {
  }

  onChange(code) {
    console.log("new code", code);
}

  ngAfterViewInit() {
    this.editor.setTheme("dracula");

    this.editor.getEditor().setOptions({
        enableBasicAutocompletion: true
    });

    this.editor.getEditor().commands.addCommand({
        name: "showOtherCompletions",
        bindKey: "Ctrl-.",
        exec: function (editor) {
        }
    })
  }

  logar() { 
    let nome =  this.nome; 
    
    if (nome == '') { 
    alert('Nome, por obséquio !');}
    else{
      alert('Seu nome é!' + nome);
      } 
    }
      
}

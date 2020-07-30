import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-get-id',
  templateUrl: './get-id.component.html',
  styleUrls: ['./get-id.component.css']
})
export class GetIdComponent implements OnInit {

  nome:any
  options:any = {maxLines: 1000, printMargin: false};
  public text:string = ""+
  "function logar() { \n"+
  "let nome = document.getElementById('nome'); \n"+
         "\n"+
   "if (nome.value == '') { \n"+
           "alert('Nome, por obséquio !');\n }"


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

import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

 
  nome:any
  options:any = {maxLines: 1000, printMargin: false};
  public text:string = "function adcElemento () {\n"+ 
    "var div2 = document.createElement('div'); \n"+
    "var conteudoNovo = document.createTextNode('Olá, cumprimentos!');\n "+
    "\n"+
    "div2.appendChild(conteudoNovo)\n"+
    "var div = document.getElementById('div');\n"+ 
    "document.body.insertBefore(div2, div); }"


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
          console.log(editor.value)
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

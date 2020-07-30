import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-code-mirror',
  templateUrl: './code-mirror.component.html',
  styleUrls: ['./code-mirror.component.css']
})
export class CodeMirrorComponent implements OnInit {

  options:any = {maxLines: 1000, printMargin: false};
  public text:string = ""+
  "function logar() { \n"+
  "let nome = document.getElementById('nome'); \n"+
         "\n"+
   "if (nome.value == '') { \n"+
           "alert('Nome, por obséquio !');}\n"

  constructor() { }
  @ViewChild('editor') public editor;
  
  ngOnInit(){
    
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

}

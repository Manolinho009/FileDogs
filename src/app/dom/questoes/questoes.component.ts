import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.css']
})
export class QuestoesComponent implements OnInit {
  
  nome:any
  options:any = {maxLines: 1000, printMargin: false};
  public text:string = "<html>\n"+
  "<head>\n"+
  "\n"+
  "</head>\n"+
  "<body>\n"+
      "\n"+
      "\n"+ 
      "<script>\n"+
      "\n"+
      "</script>\n"+  
  "</body>\n"+
  "</html>\n"


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

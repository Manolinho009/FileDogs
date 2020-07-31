import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';

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
  "<div id='elemento1'>Elemental</div>\n"+
  "<div id='elemento2'>Elemental 2</div>\n"+ 
  "<div id='elemento3'> \n"+
  "Document.getElementById('elemento3')\n"+
  "</div>\n"+ 
  "\n"+ 
  "\n"+ 
  "<script>\n"+
  "function(){ \n"+ 
  "Document.getElementById('elemento1') \n"+
  "var i = Document.getElementById('elemento2')  \n"+
  "var i = i  \n"+
  "Document.getElementById('elemento1').innerText = i  \n"+
  "}\n"+
  "</script>\n"+  
  "</body>\n"+
  "</html>\n"
  
  isSubmitted = false;
  resposta:any

  constructor(public fb: FormBuilder) { }
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


  submitForm(form: NgForm) {
    this.isSubmitted = true;
    if(!form.valid) {
      return false;
    } else {
    if(form.value.exampleRadios == 'certo'){
      alert("Você Acertou")
    }
    else{
          alert("Você Errou")
      }
    }
  }

}

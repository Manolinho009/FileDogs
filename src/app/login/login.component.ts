import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {localStorage:User}

  ngOnInit(){
  }

auxLoginArray:any = new Array();
auxSenhaArray:any = new Array();


cadastrarDados(){
  var l = document.getElementById('login')
  var s = document.getElementById('senha')

  // localStorage.setItem("login", l);
  // localStorage.setItem("senha", s);

  this.auxLoginArray.push(l);
  this.auxSenhaArray.push(s);


  localStorage.setItem("loginArray", this.auxLoginArray);

  localStorage.setItem("senhaArray", this.auxSenhaArray);

  console.log(localStorage.loginArray, localStorage.senhaArray);
  alert("Usuário cadastrado com sucesso\nLogin: "+localStorage.login 
  + "\nSenha: " + localStorage.senha);
}


logar(){
	var l_inf = document.getElementById('loginAutenticacao')
	var s_inf = document.getElementById('senhaAutenticacao')


	var l = localStorage.getItem("loginArray").split(",");

	var s = localStorage.getItem("senhaArray").split(",");
	
	var logado = false;
	for(var i=0; i<l.length; i++){

	// if(l_inf == l[i] && s_inf == s[i]){
	//   alert("Match - Usuário e senha existem no sistema");
	//   logado = true;
	//   window.open('home.html','janela');
	// }
	}
	if(logado == false){
	alert("Usuário ou Senha não existem no sistema!");
  }
}

}

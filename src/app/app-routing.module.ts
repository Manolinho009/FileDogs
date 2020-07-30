import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPlayersComponent } from './list-players/list-players.component';
import { SalasComponent } from './salas/salas.component';
import { PrincipalComponent } from './principal/principal.component';
import { ConfigComponent } from './config/config.component';
import { RegistrosComponent } from './registros/registros.component';
import { Registro2Component } from './registro2/registro2.component';
import { IfsComponent } from './ifs/ifs.component';
import { TesteSoftwareComponent } from './teste-software/teste-software.component';
import { TesteSoftware2Component } from './teste-software2/teste-software2.component';
import { LampadaComponent } from './lampada/lampada.component';
import { TesteSoftware3Component } from './teste-software3/teste-software3.component';
import { LoginComponent } from './login/login.component';
import { GustavoComponent } from './gustavo/gustavo.component';
import { ListGustavoComponent } from './gustavo/list-gustavo/list-gustavo.component';
import { DOMComponent } from './dom/dom.component';
import { GetIdComponent } from './dom/get-id/get-id.component';
import { GetTagComponent } from './dom/get-tag/get-tag.component';
import { GetClassComponent } from './dom/get-class/get-class.component';
import { QueryComponent } from './dom/query/query.component';
import { ElementComponent } from './dom/element/element.component';
import { AppendComponent } from './dom/append/append.component';
import { QuestoesComponent } from './dom/questoes/questoes.component';

const routes: Routes = [
  { path: 'salas' , component: SalasComponent},
  { path: 'home' , component: ListPlayersComponent},
  { path: 'player/:play/sala/:sala' , component: PrincipalComponent},
  { path: 'registro' , component: RegistrosComponent},
  { path: 'registro2' , component: Registro2Component},
  { path: 'verificacao' , component: TesteSoftwareComponent},
  { path: 'teste2', component: TesteSoftware2Component},
  { path: 'teste3', component: TesteSoftware3Component},
  { path: 'lampada', component: LampadaComponent},
  { path: 'gustavo', component: GustavoComponent},
  { path: 'listagustavo', component: ListGustavoComponent},
  { path: 'dom', component: DOMComponent},
  { path: 'dom/getid', component: GetIdComponent},
  { path: 'dom/gettag', component: GetTagComponent},
  { path: 'dom/getclass', component: GetClassComponent},
  { path: 'dom/query', component: QueryComponent},
  { path: 'dom/element', component: ElementComponent},
  { path: 'dom/append', component: AppendComponent},
  { path: 'dom/questoes', component: QuestoesComponent},
  { path: 'ifs' , component: IfsComponent},
  { path: 'login' , component: LoginComponent},
  { path: '' , 
  redirectTo: 'teste2',
  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

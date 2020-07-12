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

const routes: Routes = [
  { path: 'salas' , component: SalasComponent},
  { path: 'home' , component: ListPlayersComponent},
  { path: 'player/:play/sala/:sala' , component: PrincipalComponent},
  { path: 'registro' , component: RegistrosComponent},
  { path: 'registro2' , component: Registro2Component},
  { path: 'verificacao' , component: TesteSoftwareComponent},
  { path: 'teste2', component: TesteSoftware2Component},
  { path: 'ifs' , component: IfsComponent},
  { path: '' , 
  redirectTo: 'teste2',
  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

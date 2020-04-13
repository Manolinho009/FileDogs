import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPlayersComponent } from './list-players/list-players.component';
import { SalasComponent } from './salas/salas.component';
import { PrincipalComponent } from './principal/principal.component';
import { ConfigComponent } from './config/config.component';
import { RegistrosComponent } from './registros/registros.component';


const routes: Routes = [
  { path: 'salas' , component: SalasComponent},
  { path: 'home' , component: ListPlayersComponent},
  { path: 'player/:play/sala/:sala' , component: PrincipalComponent},
  { path: 'registro' , component: RegistrosComponent},
  { path: '' , 
  redirectTo: 'registro',
  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

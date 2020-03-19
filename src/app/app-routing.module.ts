import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPlayersComponent } from './list-players/list-players.component';
import { SalasComponent } from './salas/salas.component';
import { PrincipalComponent } from './principal/principal.component';
import { ConfigComponent } from './config/config.component';


const routes: Routes = [
  { path: 'salas' , component: SalasComponent},
  { path: 'home' , component: ListPlayersComponent},
  { path: 'sala/:id' , component: PrincipalComponent},
  { path: 'sala/:id/config' , component: ConfigComponent},
  { path: '' , 
  redirectTo: 'home',
  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

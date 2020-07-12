import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorageModule, StorageBucket } from "@angular/fire/storage";

import { environment } from 'src/environments/environment';
import { ListPlayersComponent } from './list-players/list-players.component';
import { SalasComponent } from './salas/salas.component';
import { PrincipalComponent } from './principal/principal.component';
import { DadoComponent } from './dado/dado.component';
import { ConfigComponent } from './config/config.component';
import { RegistrosComponent } from './registros/registros.component';
import { Registro2Component } from './registro2/registro2.component';
import { IfsComponent } from './ifs/ifs.component';
import { TesteSoftwareComponent } from './teste-software/teste-software.component';
import { TesteSoftware2Component } from './teste-software2/teste-software2.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPlayersComponent,
    SalasComponent,
    PrincipalComponent,
    DadoComponent,
    ConfigComponent,
    RegistrosComponent,
    Registro2Component,
    IfsComponent,
    TesteSoftwareComponent,
    TesteSoftware2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { LampadaComponent } from './lampada/lampada.component';
import { TesteSoftware3Component } from './teste-software3/teste-software3.component';
import { LoginComponent } from './login/login.component';
import { DOMComponent } from './dom/dom.component';
import { GustavoComponent } from './gustavo/gustavo.component';
import { FormsModule }   from '@angular/forms';
import { ListGustavoComponent } from './gustavo/list-gustavo/list-gustavo.component';
import { GetIdComponent } from './dom/get-id/get-id.component';
import { CodeMirrorComponent } from './code-mirror/code-mirror.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { GetTagComponent } from './dom/get-tag/get-tag.component';
import { GetClassComponent } from './dom/get-class/get-class.component';
import { QueryComponent } from './dom/query/query.component';
import { ElementComponent } from './dom/element/element.component';
import { AppendComponent } from './dom/append/append.component';
import { QuestoesComponent } from './dom/questoes/questoes.component';

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
    TesteSoftware2Component,
    LampadaComponent,
    TesteSoftware3Component,
    LoginComponent,
    DOMComponent,
    GustavoComponent,
    ListGustavoComponent,
    GetIdComponent,
    CodeMirrorComponent,
    GetTagComponent,
    GetClassComponent,
    QueryComponent,
    ElementComponent,
    AppendComponent,
    QuestoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule ,
    AceEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

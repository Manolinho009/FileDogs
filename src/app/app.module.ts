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

@NgModule({
  declarations: [
    AppComponent,
    ListPlayersComponent
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

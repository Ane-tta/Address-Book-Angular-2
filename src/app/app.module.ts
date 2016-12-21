import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyChWc3al8Qs4q2GOD55hpJ8iPxiZbC8Log',
  authDomain: 'addressbook-11bbd.firebaseapp.com',
  databaseURL: 'https://addressbook-11bbd.firebaseio.com',
  storageBucket: 'addressbook-11bbd.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

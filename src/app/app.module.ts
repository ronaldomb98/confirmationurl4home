import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { routes } from './app.routes';
import { FirebaseService } from './firebase.service';
import { AngularFireModule } from 'angularfire2';

const firebaseConfig = {
  apiKey: 'AIzaSyD_kapIMT_6gazAYvMjcekn4pm5A99zbmw',
  authDomain: 'home-174f2.firebaseapp.com',
  databaseURL: 'https://home-174f2.firebaseio.com',
  storageBucket: 'home-174f2.appspot.com',
  messagingSenderId: '1033167119692'
};
 
@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

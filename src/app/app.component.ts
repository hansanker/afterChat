import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.user = afAuth.authState;
    this.items = db.list('items');
  }
  
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
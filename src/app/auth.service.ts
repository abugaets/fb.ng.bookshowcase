import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { MessageService } from 'primeng/api';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User | null>;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private messageService: MessageService,
  ) {
    this.user = firebaseAuth.authState;
  }

  SignUp(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up!', res);
      })
      .catch(error => {
        console.log('Something went wrong:', error.message);
      });
  }

  SignIn() {
    this.firebaseAuth
      .signInWithEmailAndPassword('orfos@live.ru', 'test01')
      .then((res) => {
        this.messageService.add({severity:'success', summary:'Welcome back', detail:`Mr. Admin`, life: 3000});
      })
      .catch(err => {
        this.messageService.add({severity:'warn', summary:'Error', detail:`Can-t sing in. ${err.message}`, life: 7000});
      });
  }

  SignOut() {
    this.firebaseAuth.signOut()
    .then(
      () => this.messageService.add({severity:'success', summary:'See you soon', detail:'Don\'t forget your password! Kidding', life: 3000})
    );
  }

  SignInWithGoogle = () => {
    this.firebaseAuth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
};
}

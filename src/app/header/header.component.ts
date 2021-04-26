import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }

  signIn() {
    this.authService.SignIn()
    /* this.authService.SignInWithGoogle() */
  }

  signOut() {
    this.authService.SignOut()
  }

  ngOnInit(): void {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from '../helpers/user';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  ngOnInit() {
  }
  constructor(private authenticationService: AuthenticationService) {
  }

  signOut() {

    this.authenticationService.signOut();
  }
  private getUser(): User {
     return User;
  }
}

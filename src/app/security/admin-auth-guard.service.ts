import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { User } from '../helpers/user';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {
    }
  canActivate() {
    // let user = this.authenticationService.getLogedUser();
    if (User && User.IsAdmin) {
    return true;
    }
    this.router.navigate(['']);
    return false;
  }

}

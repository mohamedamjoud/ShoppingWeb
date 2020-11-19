import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { UserDto, UserForAuthenticationDto } from '../dtos/userDto';
import { User } from '../helpers/user';
import { ActivatedRoute } from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthenticationService extends DataService {

  constructor(protected http: HttpClient,
              private route: ActivatedRoute) {
    super(http, 'authentication');
  }
// TODO:send json data
  signeIn(googleUser: any) {

    const idToken: string = googleUser.getAuthResponse().id_token;
    return super.add(new UserForAuthenticationDto(idToken))
    .subscribe((response: UserDto) => {
        if (response && typeof response.idToken != 'undefined' && response.idToken) {
          localStorage.setItem('token', response.idToken);

          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
          localStorage.setItem('returnUrl', returnUrl);

          User.IdToken = response.idToken;
          User.UserName = response.firstName + " "  + response.lastName ;
          User.Email =  response.email;
          User.IsSignedIn = true;
          User.IsAdmin = response.isAdmin;

          return true;
        } else {
          return false;
        }
    });
  }

  signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut();
    User.UserName = 'User Name';
    User.IdToken = '';
    User.IsSignedIn = false;

    localStorage.removeItem('token');
  }

  // isLoggedIn(){
  //   let jwtHelper = new JwtHelperService();

  //   let token = localStorage.getItem('token');
  //   if(token)
  //   {
  //     return !jwtHelper.isTokenExpired(token);
  //   }

  //   return false;
  // }
  // getLogedUser() {

  //   let token = localStorage.getItem('token');
  //   if(!token)
  //     return null;
  //   return new JwtHelperService().decodeToken(token);
  // }

}

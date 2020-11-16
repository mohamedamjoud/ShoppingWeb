import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { UserDto, UserForAuthenticationDto } from '../dtos/userDto';
import { User } from '../helpers/user';
import { ActivatedRoute } from '@angular/router';
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
        if (response != null) {
          User.IdToken = response.idToken;
          User.UserName = response.firstName + " "  + response.lastName ;
          User.Email =  response.email;
          User.IsSignedIn = true;

          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
          localStorage.setItem('returnUrl', returnUrl);
        }
        });
  }

  signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut();
    User.UserName = 'User Name';
    User.IdToken = '';
    User.IsSignedIn = false;
  }
}

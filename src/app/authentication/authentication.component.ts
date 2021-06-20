import { Component, OnInit, NgZone} from '@angular/core';
import { User } from '../helpers/user';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UserDto, UserForAuthenticationDto } from '../dtos/userDto';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(
    private ngZone: NgZone,
    private router: Router,
    private authenticationService: AuthenticationService) {
    window['onSignIn'] = (user) => ngZone.run(() => this.onSignIn(user));
  }
  ngOnInit() {
  }

  onSignIn(googleUser) {

    this.authenticationService.signeIn(googleUser);
    let returnUrl = localStorage.getItem('returnUrl');
    this.router.navigateByUrl(returnUrl);
  }
}

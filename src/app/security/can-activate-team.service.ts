import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { User } from '../helpers/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Permissions {

  constructor(private route: Router) {}

  canActivate(id: string, state: RouterStateSnapshot ): boolean {
    if (User.IsSignedIn) { return true; }
    this.route.navigate(['/login'], { queryParams : { returnUrl : state.url}});

    return false;
  }
}


@Injectable({
  providedIn: 'root'
})
export class CanActivateTeamService implements CanActivate {

  constructor(
    private permissions: Permissions
    // private currentUser: UserToken
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
     return this.permissions.canActivate(route.params.id, state);
  }
}

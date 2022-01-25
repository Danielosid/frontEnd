import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanLoad {
  constructor(private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const x = localStorage.getItem('user');
    if (!x) {
      return false;
    }
    const user = JSON.parse(x);
    if (user.role != 1) {
      //nu esti admin
      this.router.navigateByUrl('login/sign-in');
      return false;
    }
    return true;
  }
}

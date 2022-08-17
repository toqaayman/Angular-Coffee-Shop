import { Injectable } from '@angular/core';
import {RouterStateSnapshot,CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../data/user';
import { map, take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(!this.authService.isLoggedIn()){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
    // .pipe(
    //   take(1),
    //   map((isLoggedIn: boolean) => {
    //     if (!isLoggedIn) {
    //       this.router.navigate(['/login']);
    //       return false;
    //     }
    //     return true;
    //   })
    // );
  }
}

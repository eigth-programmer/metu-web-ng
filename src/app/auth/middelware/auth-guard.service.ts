import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {isLoggedIn} from '../entities/session/application/isLoggedIn';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public router: Router) { }

  canActivate(){
    if(!isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

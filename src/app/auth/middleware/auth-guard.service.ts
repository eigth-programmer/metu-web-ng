import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {SessionFacade} from '../facades/session-facade';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public _router: Router, private _facade: SessionFacade) {
  }

  canActivate() {
    if (!this._facade.isLoggedIn()) {
      this._router.navigate(['login']);
      return false;
    }
    return true;
  }
}

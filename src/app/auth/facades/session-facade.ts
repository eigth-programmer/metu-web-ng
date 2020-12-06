import {TokenMapper} from '../entities/session/infrastructure/token-mapper';
import {IUserLogin} from '../entities/user/domain/IUserLogin';
import {IUserRegister} from '../entities/user/domain/IUserRegister';
import {AbstractSessionService} from '../entities/session/infrastructure/abstract-session-service';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionFacade {
  private _service: AbstractSessionService;

  constructor(private _mapper: TokenMapper) {
  }

  login(userInfo: IUserLogin) {
    return this._service.login(userInfo).pipe(map(this._mapper.mapTo));
  }

  register(userInfo: IUserRegister) {
    return this._service.register(userInfo).pipe(map(this._mapper.mapTo));
  }

  isLoggedIn() {
    return true;
  }
}

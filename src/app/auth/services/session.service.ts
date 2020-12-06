import {Injectable} from '@angular/core';
import {AbstractSessionService} from '../entities/session/infrastructure/abstract-session-service';
import {Observable} from 'rxjs';
import {IToken} from '../entities/session/domain/IToken';
import {GenericService} from '../../shared/services/generic.service';
import {IUserOut} from '../entities/user/domain/IUserOut';
import {endpoints} from '../config/endpoints';
import {IUserLogin} from '../entities/user/domain/IUserLogin';
import {IUserRegister} from '../entities/user/domain/IUserRegister';

@Injectable({
  providedIn: 'root'
})
export class SessionService extends AbstractSessionService {

  constructor(private _generic: GenericService<IUserOut, IToken>) {
    super();
    _generic.url(endpoints.session);
  }

  login(userInfo: IUserLogin): Observable<IToken> {
    return this._generic.create(userInfo);
  }

  register(userInfo: IUserRegister): Observable<IToken> {
    return this._generic.create(userInfo);
  }

}

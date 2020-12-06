import {Observable} from 'rxjs';
import {IToken} from '../domain/IToken';
import {IUserLogin} from '../../user/domain/IUserLogin';
import {IUserRegister} from '../../user/domain/IUserRegister';

export abstract class AbstractSessionService {
  abstract login(userInfo: IUserLogin): Observable<IToken>;

  abstract register(userInfo: IUserRegister): Observable<IToken>;
}

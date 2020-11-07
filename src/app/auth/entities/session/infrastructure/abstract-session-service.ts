import {Observable} from 'rxjs';
import {IToken} from '../domain/IToken';

export abstract class AbstractSessionService {
  abstract login(email: string, password: string): Observable<IToken>;
  abstract register(email: string, password: string): Observable<IToken>;
}

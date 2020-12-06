import {Injectable} from '@angular/core';
import {UserAbstractService} from '../entities/user/infrastructure/user-abstract-service';
import {IUserOut} from '../entities/user/domain/IUserOut';
import {Observable} from 'rxjs';
import {GenericService} from '../../shared/services/generic.service';
import {endpoints} from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class UserService extends UserAbstractService {

  constructor(private _generic: GenericService<IUserOut, any>) {
    super();
    _generic.url(endpoints.user);
  }

  create<IUserOut>(user: IUserOut): Observable<any> {
    return this._generic.create(user);
  }

  delete(id: string) {
    return this._generic.delete(id);
  }

  get(id: string): Observable<any> {
    return this._generic.get(id);
  }

  search(query: any): Observable<any> {
    return this._generic.search(query);
  }

  update<IUserOut>(user: IUserOut): Observable<any> {
    return this._generic.create(user);
  }
}

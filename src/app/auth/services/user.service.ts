import { Injectable } from '@angular/core';
import {UserAbstractService} from '../entities/user/infrastructure/user-abstract-service';
import {IUser} from '../entities/user/domain/IUser';
import {IUserOut} from '../entities/user/domain/IUserOut';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends UserAbstractService{

  constructor() {super();}

  create(user: IUserOut): Observable<IUser> {
    return null;
  }

  delete(id: string) {
  }

  get(id: string): Observable<IUser> {
    return null;
  }

  search(params: any): Observable<IUser[]> {
    return null;
  }

  update(user: IUserOut): Observable<IUser> {
    return null;
  }
}

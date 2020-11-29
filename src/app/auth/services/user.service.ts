import { Injectable } from '@angular/core';
import {UserAbstractService} from '../entities/user/infrastructure/user-abstract-service';
import {IUser} from '../entities/user/domain/IUser';
import {IUserOut} from '../entities/user/domain/IUserOut';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends UserAbstractService{

  private _URL = '';

  constructor(private _httpClient: HttpClient) {super();}

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

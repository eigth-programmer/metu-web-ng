import { Injectable } from '@angular/core';
import {UserAbstractService} from '../entities/user/infrastructure/user-abstract-service';

@Injectable({
  providedIn: 'root'
})
export class UserWebService extends UserAbstractService{

  constructor() {super();}
}

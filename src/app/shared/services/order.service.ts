import { Injectable } from '@angular/core';
import {OrderAbstractService} from '../entities/order/infrastructure/order-abstract-service';
import {IOrderOut} from '../entities/order/domain/IOrderOut';
import {Observable} from 'rxjs';
import {GenericService} from './generic.service';
import {endpoints} from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends OrderAbstractService{

  constructor(private _generic: GenericService<IOrderOut, any>) {
    super();
    _generic.url(endpoints.order);
  }

  create(order: IOrderOut): Observable<any>{return this._generic.create(order)}
  delete(id: string) {return this._generic.delete(id)}
  get(id: string): Observable<any> {return this._generic.get(id)}
  search(query: any): Observable<any> {return this._generic.search(query)}
  update(order: IOrderOut): Observable<any>{return this._generic.create(order)}
}

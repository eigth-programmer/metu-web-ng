import { Injectable } from '@angular/core';
import {OrderAbstractService} from '../entities/order/infrastructure/order-abstract-service';
import {IOrderOut} from '../entities/order/domain/IOrderOut';
import {Observable} from 'rxjs';
import {IOrder} from '../entities/order/domain/IOrder';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends OrderAbstractService{

  private _URL = '';

  constructor(private _httpClient: HttpClient) {
    super();
  }

  create(order: IOrderOut): Observable<IOrder> {
    return null;
  }

  delete(id: string) {
  }

  get(id: string): Observable<IOrder> {
    return null;
  }

  search(params: any): Observable<IOrder[]> {
    return null;
  }

  update(order: IOrderOut): Observable<IOrder> {
    return null;
  }
}

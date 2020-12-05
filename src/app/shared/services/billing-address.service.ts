import { Injectable } from '@angular/core';
import {BillingAddressAbstractService} from '../entities/billing-address/infrastructure/billing-address-abstract-service';
import {IBillingAddress} from '../entities/billing-address/domain/IBillingAddress';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {GenericService} from './generic.service';
import {IOrderOut} from '../entities/order/domain/IOrderOut';
import {endpoints} from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class BillingAddressService extends BillingAddressAbstractService{

  constructor(private _generic: GenericService<IBillingAddress, any>) {
    super();
    _generic.url(endpoints.billingAddress);
  }

  create(billingAddress: IBillingAddress): Observable<any>{return this._generic.create(billingAddress)}
  delete(id: string) {return this._generic.delete(id)}
  get(id: string): Observable<any> {return this._generic.get(id)}
  search(query: any): Observable<any> {return this._generic.search(query)}
  update(billingAddress: IBillingAddress): Observable<any>{return this._generic.create(billingAddress)}
}

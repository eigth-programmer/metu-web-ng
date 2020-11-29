import { Injectable } from '@angular/core';
import {BillingAddressAbstractService} from '../entities/billing-address/infrastructure/billing-address-abstract-service';
import {IBillingAddress} from '../entities/billing-address/domain/IBillingAddress';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillingAddressService extends BillingAddressAbstractService{

  private _URL = '';

  constructor(private _httpClient: HttpClient) {
    super();
  }

  create(billingAddress: IBillingAddress): Observable<IBillingAddress> {
    return null;
  }

  delete(id: string) {
  }

  get(id: string): Observable<IBillingAddress> {
    return null;
  }

  search(params: any): Observable<IBillingAddress[]> {
    return null;
  }

  update(billingAddress: IBillingAddress): Observable<IBillingAddress> {
    return null;
  }
}

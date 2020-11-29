import { Injectable } from '@angular/core';
import {BillingAddressAbstractService} from '../entities/billing-address/infrastructure/billing-address-abstract-service';
import {IBillingAddress} from '../entities/billing-address/domain/IBillingAddress';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingAddressService extends BillingAddressAbstractService{

  constructor() {
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

  search(params: any) {
  }

  update(billingAddress: IBillingAddress): Observable<IBillingAddress[]> {
    return null;
  }
}

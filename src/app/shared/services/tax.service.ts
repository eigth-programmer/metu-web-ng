import { Injectable } from '@angular/core';
import {TaxAbstractService} from '../entities/tax/infrastructure/tax-abstract-service';
import {Observable} from 'rxjs';
import {ITax} from '../entities/tax/domain/ITax';
import {GenericService} from './generic.service';
import {endpoints} from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class TaxService extends TaxAbstractService{

  constructor(private _generic: GenericService<ITax, any>) {
    super();
    _generic.url(endpoints.tax);
  }

  create(tax: ITax): Observable<any>{return this._generic.create(tax)}
  delete(id: string) {return this._generic.delete(id)}
  get(id: string): Observable<any> {return this._generic.get(id)}
  search(query: any): Observable<any> {return this._generic.search(query)}
}

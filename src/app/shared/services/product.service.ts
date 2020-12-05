import { Injectable } from '@angular/core';
import {ProductAbstractService} from '../entities/product/infrastructure/product-abstract-service';
import {IProductOut} from '../entities/product/domain/IProductOut';
import {Observable} from 'rxjs';
import {GenericService} from './generic.service';
import {endpoints} from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ProductAbstractService{

  constructor(private _generic: GenericService<IProductOut, any>) {
    super();
    _generic.url(endpoints.product);
  }

  create(product: IProductOut): Observable<any>{return this._generic.create(product)}
  delete(id: string) {return this._generic.delete(id)}
  get(id: string): Observable<any> {return this._generic.get(id)}
  search(query: any): Observable<any> {return this._generic.search(query)}
  update(product: IProductOut): Observable<any>{return this._generic.create(product)}
}

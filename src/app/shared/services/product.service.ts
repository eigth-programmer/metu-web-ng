import { Injectable } from '@angular/core';
import {ProductAbstractService} from '../entities/product/infrastructure/product-abstract-service';
import {IProductOut} from '../entities/product/domain/IProductOut';
import {Observable} from 'rxjs';
import {IProduct} from '../entities/product/domain/IProduct';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ProductAbstractService{

  private _URL = '';

  constructor(private _httpClient: HttpClient) {
    super();
  }

  create(product: IProductOut): Observable<IProduct> {
    return null;
  }

  delete(id: string) {

  }

  get(id: string): Observable<IProduct> {
    return null;
  }

  search(params: any): Observable<IProduct[]> {
    return null;
  }

  update(product: IProductOut): Observable<IProduct> {
    return null;
  }
}

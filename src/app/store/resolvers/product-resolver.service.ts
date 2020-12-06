import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IDataResolved} from '../../shared/entities/base/domain/IDataResolved';
import {Observable, of} from 'rxjs';
import {ProductService} from '../../shared/services/product.service';
import {ProductFacade} from '../../shared/facades/product-facade';
import {catchError, map} from 'rxjs/operators';
import {CategoryFacade} from '../../shared/facades/category-facade';
import {IProduct} from '../../shared/entities/product/domain/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<IDataResolved<IProduct[]>> {

  constructor(private _service: ProductService,
              private _products: ProductFacade,
              private _categories: CategoryFacade) {
    this._products.service = this._service;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IDataResolved<IProduct[]>> | Promise<IDataResolved<IProduct[]>> | IDataResolved<IProduct[]> {
    return this._products
      .search({page: 0, size: 100, categories: [route.routeConfig.path]})
      .pipe(
        map(response => ({data: response})),
        catchError(error => {
          return of({
            data: null,
            error: {message: 'Error while retrieving product data', error: error}
          });
        }));
  }
}

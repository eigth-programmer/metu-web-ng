import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IProductResolved} from '../../shared/entities/product/domain/IProductResolved';
import {Observable, of} from 'rxjs';
import {ProductService} from '../../shared/services/product.service';
import {ProductFacade} from '../../shared/facades/product-facade';
import {catchError, map} from 'rxjs/operators';
import {CategoryFacade} from '../../shared/facades/category-facade';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<IProductResolved> {

  constructor(private _service: ProductService,
              private _products: ProductFacade,
              private _categories: CategoryFacade) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProductResolved> | Promise<IProductResolved> | IProductResolved {
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

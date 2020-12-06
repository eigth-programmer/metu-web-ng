import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {forkJoin, Observable, of} from 'rxjs';
import {IDataResolved} from '../../shared/entities/base/domain/IDataResolved';
import {SectionsData} from '../presentation/sections/SectionsData';
import {ProductService} from '../../shared/services/product.service';
import {CategoryService} from '../../shared/services/category.service';
import {ProductFacade} from '../../shared/facades/product-facade';
import {CategoryFacade} from '../../shared/facades/category-facade';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SectionsResolverService implements Resolve<IDataResolved<SectionsData>> {

  constructor(private _productService: ProductService,
              private _categoryService: CategoryService,
              private _products: ProductFacade,
              private _categories: CategoryFacade) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IDataResolved<SectionsData>> | Promise<IDataResolved<SectionsData>> | IDataResolved<SectionsData> {
    const storeProducts = this._products.search({page: 0, size: 5, categories: ['store']});
    const coffeeShopProducts = this._products.search({page: 0, size: 5, categories: ['coffee-shop']});
    const categories = this._categories.search({page: 0, size: 100});

    return forkJoin(storeProducts, coffeeShopProducts, categories)
      .pipe(
        map(response => ({
          data: {
            storeProducts: response[0],
            coffeeShopProducts: response[1],
            categories: response[2]
          }
        })),
        catchError(error => {
          return of({
            data: null,
            error: {message: 'Error while retrieving product data', error: error}
          });
        }));
  }
}

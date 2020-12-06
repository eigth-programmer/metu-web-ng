import {Injectable} from '@angular/core';
import {CategoryAbstractService} from '../entities/category/infrastructure/category-abstract-service';
import {ICategory} from '../entities/category/domain/ICategory';
import {Observable} from 'rxjs';
import {GenericService} from './generic.service';
import {endpoints} from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CategoryAbstractService{

  constructor(private _generic: GenericService<ICategory, any>) {
    super();
    _generic.url(endpoints.category);
  }

  create<ICategory>(category: ICategory): Observable<any> {
    return this._generic.create(category);
  }

  delete(id: string) {
    return this._generic.delete(id);
  }
  get(id: string): Observable<any> {return this._generic.get(id)}
  search(query: any): Observable<any> {return this._generic.search(query)}
}

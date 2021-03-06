import {CategoryMapper} from '../entities/category/infrastructure/category-mapper';
import {ICategory} from '../entities/category/domain/ICategory';
import {CategoryAbstractService} from '../entities/category/infrastructure/category-abstract-service';
import {map, toArray} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryFacade {
  private _service: CategoryAbstractService;

  constructor(private _mapper: CategoryMapper) {
  }

  create(category: ICategory) {
    return this._service.create(category).pipe(map(this._mapper.mapTo));
  }

  search(query: any) {
    return this._service.search(query)
      .pipe(
        map(this._mapper.mapTo),
        toArray()
      );
  }

  delete(id: string) {
    return this._service.delete(id);
  }

  set service(service: CategoryAbstractService) {
    this._service = service;
  }
}

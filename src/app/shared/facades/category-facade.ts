import {CategoryMapper} from '../entities/category/infrastructure/category-mapper';
import {ICategory} from '../entities/category/domain/ICategory';
import {CategoryAbstractService} from '../entities/category/infrastructure/category-abstract-service';

export class CategoryFacade {
  private _service: CategoryAbstractService;

  constructor(private _mapper: CategoryMapper) {
  }

  create(category: ICategory) {
    return this._service.create(category);
  }

  search(query: any) {
    return this._service.delete(query);
  }

  delete(id: string) {
    return this._service.delete(id);
  }
}

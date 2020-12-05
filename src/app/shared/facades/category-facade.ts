import {CategoryMapper} from '../entities/category/infrastructure/category-mapper';
import {ICategory} from '../entities/category/domain/ICategory';
import {CategoryAbstractService} from '../entities/category/infrastructure/category-abstract-service';

export class CategoryFacade {
  constructor(private _mapper: CategoryMapper) {
  }

  create(category: ICategory, service: CategoryAbstractService) {

  }

  search(query: any, service: CategoryAbstractService) {

  }

  delete(id: string, service: CategoryAbstractService) {

  }
}

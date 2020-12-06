import {ProductMapper} from '../entities/product/infrastructure/product-mapper';
import {IProductOut} from '../entities/product/domain/IProductOut';
import {ProductAbstractService} from '../entities/product/infrastructure/product-abstract-service';
import {TaxMapper} from '../entities/tax/infrastructure/tax-mapper';
import {ReviewMapper} from '../entities/review/infrastructure/review-mapper';
import {CategoryMapper} from '../entities/category/infrastructure/category-mapper';

export class ProductFacade {
  private _service: ProductAbstractService;

  constructor(private _productMapper: ProductMapper,
              private _taxMapper: TaxMapper,
              private _reviewMapper: ReviewMapper,
              private _categoryMapper: CategoryMapper) {
  }

  create(product: IProductOut) {
    return this._service.create(product);
  }

  update(product: IProductOut) {
    return this._service.update(product);
  }

  search(query: any) {
    return this._service.search(query);
  }

  delete(id: string) {
    return this._service.delete(id);
  }
}

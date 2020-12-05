import {ProductMapper} from '../entities/product/infrastructure/product-mapper';
import {IProductOut} from '../entities/product/domain/IProductOut';
import {ProductAbstractService} from '../entities/product/infrastructure/product-abstract-service';
import {TaxMapper} from '../entities/tax/infrastructure/tax-mapper';
import {ReviewMapper} from '../entities/review/infrastructure/review-mapper';
import {CategoryMapper} from '../entities/category/infrastructure/category-mapper';

export class ProductFacade {
  constructor(private _productMapper: ProductMapper,
              private _taxMapper: TaxMapper,
              private _reviewMapper: ReviewMapper,
              private _categoryMapper: CategoryMapper) {
  }

  create(product: IProductOut, service: ProductAbstractService) {

  }

  update(product: IProductOut, service: ProductAbstractService) {

  }

  search(query: any, service: ProductAbstractService) {

  }

  delete(id: string, service: ProductAbstractService) {

  }
}

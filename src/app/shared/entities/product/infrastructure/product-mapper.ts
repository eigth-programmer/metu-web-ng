import {IProduct} from '../domain/IProduct';
import {TaxMapper} from '../../tax/infrastructure/tax-mapper';
import {ReviewMapper} from '../../review/infrastructure/review-mapper';
import {CategoryMapper} from '../../category/infrastructure/category-mapper';

export class ProductMapper {
  constructor(private _taxMapper: TaxMapper,
              private _reviewMapper: ReviewMapper,
              private _categoryMapper: CategoryMapper) {
  }

  mapTo(entry: any): IProduct {
    const {
      id,
      name,
      price,
      description,
      taxes,
      images,
      reviews,
      categories
    } = entry;

    return {
      id: id,
      name: name,
      price: price,
      description: description,
      taxes: taxes.map(tax => this._taxMapper.mapTo(tax)),
      images: images,
      reviews: reviews.map(review => this._reviewMapper.mapTo(review)),
      categories: categories.map(category => this._categoryMapper.mapTo(category))
    };
  }
}

import {IAdmin} from '../../../../auth/entities/admin/domain/IAdmin';
import {IProduct} from '../domain/IProduct';
import {ITax} from '../../tax/domain/ITax';
import {IReview} from '../../review/domain/IReview';
import {ICategory} from '../../category/domain/ICategory';

export class ProductMapper {
  mapTo(entry: any): IProduct{
    const {
      id,
      name,
      price,
      description,
      taxes,
      images,
      reviews,
      categories} = entry;

    return {
      id: id,
      name: name,
      price: price,
      description: description,
      taxes: taxes,
      images: images,
      reviews: reviews,
      categories: categories
    };
  }
}

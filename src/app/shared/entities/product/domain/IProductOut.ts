import {ITax} from '../../tax/domain/ITax';
import {IReview} from '../../review/domain/IReview';
import {ICategory} from '../../category/domain/ICategory';

export interface IProductOut{
  id?: string,
  name: string,
  price: number,
  description: string,
  taxes: string[],
  images: string[],
  reviews: string[],
  categories: string[]
}

import {ICategory} from '../../category/domain/ICategory';
import {ITax} from '../../tax/domain/ITax';
import {IReview} from '../../review/domain/IReview';

export interface IProduct{
  id: string,
  name: string,
  price: number,
  description: string,
  taxes: ITax[],
  images: string[],
  reviews: IReview[],
  categories: ICategory[]
}

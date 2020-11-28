import {ICategory} from '../../category/domain/ICategory';

export interface IProduct{
  id: string,
  name: string,
  price: number,
  description: string,
  taxes: any[],
  images: string[],
  reviews: any[],
  categories: ICategory[]
}

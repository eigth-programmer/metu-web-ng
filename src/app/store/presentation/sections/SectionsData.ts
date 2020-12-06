import {IProduct} from '../../../shared/entities/product/domain/IProduct';
import {ICategory} from '../../../shared/entities/category/domain/ICategory';

export interface SectionsData {
  storeProducts: IProduct[],
  coffeeShopProducts: IProduct[],
  categories: ICategory[]
}

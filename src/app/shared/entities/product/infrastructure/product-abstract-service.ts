import {IOrder} from '../../order/domain/IOrder';
import {IProduct} from '../domain/IProduct';
import {IProductOut} from '../domain/IProductOut';

export abstract class ProductAbstractService {
  abstract create(product: IProductOut);
  abstract update(product: IProductOut);
  abstract delete(id: string);
  abstract get(id: string);
  abstract search(params: any);
}

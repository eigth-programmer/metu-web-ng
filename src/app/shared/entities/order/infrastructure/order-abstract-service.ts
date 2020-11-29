import {ICategory} from '../../category/domain/ICategory';
import {IOrder} from '../domain/IOrder';
import {IOrderOut} from '../domain/IOrderOut';

export abstract class OrderAbstractService {
  abstract create(order: IOrderOut);
  abstract update(order: IOrderOut);
  abstract delete(id: string);
  abstract get(id: string);
  abstract search(params: any);
}

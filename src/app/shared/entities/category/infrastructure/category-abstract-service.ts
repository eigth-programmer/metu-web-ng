import {IBillingAddress} from '../../billing-address/domain/IBillingAddress';
import {ICategory} from '../domain/ICategory';

export abstract class CategoryAbstractService {
  abstract create(category: ICategory);
  abstract delete(id: string);
  abstract get(id: string);
  abstract search(params: any);
}

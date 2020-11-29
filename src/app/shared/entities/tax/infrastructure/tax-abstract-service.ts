import {IReview} from '../../review/domain/IReview';
import {ITax} from '../domain/ITax';

export abstract class TaxAbstractService {
  abstract create(tax: ITax);
  abstract delete(id: string);
  abstract get(id: string);
  abstract search(params: any);
}

import {IProduct} from '../../product/domain/IProduct';
import {IReview} from '../domain/IReview';
import {IReviewOut} from '../domain/IReviewOut';

export abstract class ReviewAbstractService {
  abstract create(review: IReviewOut);
  abstract update(review: IReviewOut);
  abstract delete(id: string);
  abstract get(id: string);
  abstract search(params: any);
}

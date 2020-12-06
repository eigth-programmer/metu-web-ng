import {ReviewMapper} from '../entities/review/infrastructure/review-mapper';
import {IReviewOut} from '../entities/review/domain/IReviewOut';
import {ReviewAbstractService} from '../entities/review/infrastructure/review-abstract-service';

export class ReviewFacade {
  private _service: ReviewAbstractService;

  constructor(private _mapper: ReviewMapper) {
  }

  create(review: IReviewOut) {
    return this._service.create(review);
  }

  search(query: any) {
    return this._service.search(query);
  }

  delete(id: string) {
    return this._service.delete(id);
  }
}

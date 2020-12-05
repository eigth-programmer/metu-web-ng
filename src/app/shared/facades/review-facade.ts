import {ReviewMapper} from '../entities/review/infrastructure/review-mapper';
import {IReviewOut} from '../entities/review/domain/IReviewOut';
import {ReviewAbstractService} from '../entities/review/infrastructure/review-abstract-service';

export class ReviewFacade {
  constructor(private _mapper: ReviewMapper) {
  }

  create(review: IReviewOut, service: ReviewAbstractService) {

  }

  search(query: any, service: ReviewAbstractService) {

  }

  delete(id: string, service: ReviewAbstractService) {

  }
}

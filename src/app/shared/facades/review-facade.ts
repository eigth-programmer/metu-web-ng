import {ReviewMapper} from '../entities/review/infrastructure/review-mapper';
import {IReviewOut} from '../entities/review/domain/IReviewOut';
import {ReviewAbstractService} from '../entities/review/infrastructure/review-abstract-service';
import {map, toArray} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewFacade {
  private _service: ReviewAbstractService;

  constructor(private _mapper: ReviewMapper) {
  }

  create(review: IReviewOut) {
    return this._service.create(review).pipe(map(this._mapper.mapTo));
  }

  search(query: any) {
    return this._service.search(query)
      .pipe(
        map(this._mapper.mapTo),
        toArray()
      );
  }

  delete(id: string) {
    return this._service.delete(id);
  }
}

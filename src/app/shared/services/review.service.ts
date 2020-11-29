import { Injectable } from '@angular/core';
import {ReviewAbstractService} from '../entities/review/infrastructure/review-abstract-service';
import {IReviewOut} from '../entities/review/domain/IReviewOut';
import {Observable} from 'rxjs';
import {IReview} from '../entities/review/domain/IReview';

@Injectable({
  providedIn: 'root'
})
export class ReviewService extends ReviewAbstractService{

  constructor() {
    super();
  }

  create(review: IReviewOut): Observable<IReview> {
    return null;
  }

  delete(id: string) {
  }

  get(id: string): Observable<IReview> {
    return null;
  }

  search(params: any): Observable<IReview[]> {
    return null;
  }

  update(review: IReviewOut): Observable<IReview> {
    return null;
  }
}

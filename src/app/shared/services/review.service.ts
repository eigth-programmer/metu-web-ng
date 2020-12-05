import { Injectable } from '@angular/core';
import {ReviewAbstractService} from '../entities/review/infrastructure/review-abstract-service';
import {IReviewOut} from '../entities/review/domain/IReviewOut';
import {Observable} from 'rxjs';
import {GenericService} from './generic.service';
import {endpoints} from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ReviewService extends ReviewAbstractService{

  constructor(private _generic: GenericService<IReviewOut, any>) {
    super();
    _generic.url(endpoints.review);
  }

  create(review: IReviewOut): Observable<any>{return this._generic.create(review)}
  delete(id: string) {return this._generic.delete(id)}
  get(id: string): Observable<any> {return this._generic.get(id)}
  search(query: any): Observable<any> {return this._generic.search(query)}
  update(review: IReviewOut): Observable<any>{return this._generic.create(review)}
}

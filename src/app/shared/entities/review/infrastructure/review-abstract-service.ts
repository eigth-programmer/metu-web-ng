import {IReviewOut} from '../domain/IReviewOut';
import {ICreate} from '../../base/infrastructure/ICreate';
import {IUpdate} from '../../base/infrastructure/IUpdate';
import {ISearch} from '../../base/infrastructure/ISearch';
import {IDelete} from '../../base/infrastructure/IDelete';
import {IGet} from '../../base/infrastructure/IGet';
import {Observable} from 'rxjs';

export abstract class ReviewAbstractService implements ICreate<IReviewOut, any>,
  IUpdate<IReviewOut, any>,
  ISearch<any>,
  IDelete,
  IGet<any> {

  abstract create<IReviewOut>(review: IReviewOut): Observable<any>;

  abstract update<IReviewOut>(review: IReviewOut): Observable<any>;

  abstract delete(id: string);

  abstract get(id: string): Observable<any>;

  abstract search(params: any): Observable<any[]>;
}

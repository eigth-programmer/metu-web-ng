import {Observable} from 'rxjs';

export interface IUpdate<T, W> {
  update<T>(item: T): Observable<W>;
}

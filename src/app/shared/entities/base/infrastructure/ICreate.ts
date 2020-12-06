import {Observable} from 'rxjs';

export interface ICreate<T, W> {
  create<T>(item: T): Observable<W>;
}

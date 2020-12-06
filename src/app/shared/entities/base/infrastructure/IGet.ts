import {Observable} from 'rxjs';

export interface IGet<W> {
  get(id: string): Observable<W>;
}

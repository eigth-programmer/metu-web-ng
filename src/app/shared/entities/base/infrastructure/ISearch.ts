import {Observable} from 'rxjs';

export interface ISearch<W> {
  search(query: any): Observable<W[]>;
}

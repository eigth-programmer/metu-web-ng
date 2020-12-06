import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GenericService<O,W> {

  private _URL: string;

  constructor(private _httpClient: HttpClient) { }

  create<O>(item: O): Observable<W> {
    return this._httpClient.post<W>(this._URL, item);
  }

  delete(id: string) {
    return this._httpClient.delete(this._URL + id);
  }

  get(id: string): Observable<W> {
    return this._httpClient.get<W>(this._URL + id);
  }

  search(query: any): Observable<W[]> {
    return this._httpClient.get<W[]>(this._URL, {params: GenericService._queryBuilder(query)});
  }

  update<O>(item: O): Observable<W> {
    return this._httpClient.post<W>(this._URL, item);
  }

  url(url: string){
    this._URL = url;
  }

  private static _queryBuilder(query: any): HttpParams{
    let httpParams = new HttpParams();
    let paramsKeys = Object.keys(query);
    paramsKeys.forEach(key => {if(query[key]!== undefined) httpParams = httpParams.append(key, query[key].toString())});

    return httpParams;
  }
}

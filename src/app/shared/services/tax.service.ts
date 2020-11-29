import { Injectable } from '@angular/core';
import {TaxAbstractService} from '../entities/tax/infrastructure/tax-abstract-service';
import {IReview} from '../entities/review/domain/IReview';
import {Observable} from 'rxjs';
import {ITax} from '../entities/tax/domain/ITax';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaxService extends TaxAbstractService{

  private _URL = '';

  constructor(private _httpClient: HttpClient) {
    super();
  }

  create(tax: ITax): Observable<ITax>{
    return null;
  }

  delete(id: string) {
  }

  get(id: string): Observable<ITax> {
    return null;
  }

  search(params: any): Observable<ITax[]> {
    return null;
  }
}

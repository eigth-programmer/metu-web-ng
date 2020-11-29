import { Injectable } from '@angular/core';
import {TaxAbstractService} from '../entities/tax/infrastructure/tax-abstract-service';
import {IReview} from '../entities/review/domain/IReview';
import {Observable} from 'rxjs';
import {ITax} from '../entities/tax/domain/ITax';

@Injectable({
  providedIn: 'root'
})
export class TaxService extends TaxAbstractService{

  constructor() {
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

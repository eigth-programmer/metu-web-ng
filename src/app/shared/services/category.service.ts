import { Injectable } from '@angular/core';
import {CategoryAbstractService} from '../entities/category/infrastructure/category-abstract-service';
import {ICategory} from '../entities/category/domain/ICategory';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CategoryAbstractService{

  constructor() {super();}

  create(category: ICategory): Observable<ICategory> {
    return null;
  }

  delete(id: string) {
  }

  get(id: string): Observable<ICategory> {
    return null;
  }

  search(params: any): Observable<ICategory[]> {
    return null;
  }
}

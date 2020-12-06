import {ICategory} from '../domain/ICategory';
import {ICreate} from '../../base/infrastructure/ICreate';
import {ISearch} from '../../base/infrastructure/ISearch';
import {IDelete} from '../../base/infrastructure/IDelete';
import {IGet} from '../../base/infrastructure/IGet';
import {Observable} from 'rxjs';

export abstract class CategoryAbstractService implements ICreate<ICategory, any>,
  ISearch<any>,
  IDelete,
  IGet<any> {

  abstract create<ICategory>(item: ICategory): Observable<any>;

  abstract delete(id: string);

  abstract get(id: string): Observable<any>;

  abstract search(params: any): Observable<any[]>;
}

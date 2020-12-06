import {IProductOut} from '../domain/IProductOut';
import {ICreate} from '../../base/infrastructure/ICreate';
import {IUpdate} from '../../base/infrastructure/IUpdate';
import {ISearch} from '../../base/infrastructure/ISearch';
import {IDelete} from '../../base/infrastructure/IDelete';
import {IGet} from '../../base/infrastructure/IGet';
import {Observable} from 'rxjs';

export abstract class ProductAbstractService implements ICreate<IProductOut, any>,
  IUpdate<IProductOut, any>,
  ISearch<any>,
  IDelete,
  IGet<any> {

  abstract create<IProductOut>(product: IProductOut): Observable<any>;

  abstract update<IProductOut>(product: IProductOut): Observable<any>;

  abstract delete(id: string);

  abstract get(id: string): Observable<any>;

  abstract search(params: any): Observable<any[]>;
}

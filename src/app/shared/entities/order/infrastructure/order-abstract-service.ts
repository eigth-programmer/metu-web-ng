import {IOrderOut} from '../domain/IOrderOut';
import {ICreate} from '../../base/infrastructure/ICreate';
import {IUpdate} from '../../base/infrastructure/IUpdate';
import {ISearch} from '../../base/infrastructure/ISearch';
import {IDelete} from '../../base/infrastructure/IDelete';
import {IGet} from '../../base/infrastructure/IGet';
import {Observable} from 'rxjs';

export abstract class OrderAbstractService implements ICreate<IOrderOut, any>,
  IUpdate<IOrderOut, any>,
  ISearch<any>,
  IDelete,
  IGet<any> {

  abstract create<IOrderOut>(order: IOrderOut): Observable<any>;

  abstract update<IOrderOut>(order: IOrderOut): Observable<any>;

  abstract delete(id: string);

  abstract get(id: string): Observable<any>;

  abstract search(params: any): Observable<any[]>;
}

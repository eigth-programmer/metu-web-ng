import {ITax} from '../domain/ITax';
import {ICreate} from '../../base/infrastructure/ICreate';
import {ISearch} from '../../base/infrastructure/ISearch';
import {IDelete} from '../../base/infrastructure/IDelete';
import {IGet} from '../../base/infrastructure/IGet';
import {Observable} from 'rxjs';

export abstract class TaxAbstractService implements ICreate<ITax, any>,
  ISearch<any>,
  IDelete,
  IGet<any> {

  abstract create<ITax>(tax: ITax): Observable<any>;

  abstract delete(id: string);

  abstract get(id: string): Observable<any>;

  abstract search(params: any): Observable<any[]>;
}

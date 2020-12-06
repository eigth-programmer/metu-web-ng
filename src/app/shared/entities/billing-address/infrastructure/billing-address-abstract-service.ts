import {IBillingAddress} from '../domain/IBillingAddress';
import {ICreate} from '../../base/infrastructure/ICreate';
import {IUpdate} from '../../base/infrastructure/IUpdate';
import {ISearch} from '../../base/infrastructure/ISearch';
import {IDelete} from '../../base/infrastructure/IDelete';
import {IGet} from '../../base/infrastructure/IGet';
import {Observable} from 'rxjs';

export abstract class BillingAddressAbstractService implements ICreate<IBillingAddress, any>,
  IUpdate<IBillingAddress, any>,
  ISearch<any>,
  IDelete,
  IGet<any> {

  abstract create<IBillingAddress>(item: IBillingAddress): Observable<any>;

  abstract delete(id: string);

  abstract get(id: string): Observable<any>;

  abstract search(query: any): Observable<any[]>;

  abstract update<IBillingAddress>(item: IBillingAddress): Observable<any>;

}

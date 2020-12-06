import {IUserOut} from '../domain/IUserOut';
import {ICreate} from '../../../../shared/entities/base/infrastructure/ICreate';
import {IUpdate} from '../../../../shared/entities/base/infrastructure/IUpdate';
import {ISearch} from '../../../../shared/entities/base/infrastructure/ISearch';
import {IDelete} from '../../../../shared/entities/base/infrastructure/IDelete';
import {IGet} from '../../../../shared/entities/base/infrastructure/IGet';
import {Observable} from 'rxjs';

export abstract class UserAbstractService implements ICreate<IUserOut, any>,
  IUpdate<IUserOut, any>,
  ISearch<any>,
  IDelete,
  IGet<any> {

  abstract create<IUserOut>(user: IUserOut): Observable<any>;

  abstract update<IUserOut>(user: IUserOut): Observable<any>;

  abstract delete(id: string);

  abstract get(id: string): Observable<any>;

  abstract search(params: any): Observable<any[]>;
}

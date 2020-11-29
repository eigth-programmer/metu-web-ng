import {IUser} from '../domain/IUser';
import {IUserOut} from '../domain/IUserOut';

export abstract class UserAbstractService {
  abstract create(user: IUserOut);
  abstract update(user: IUserOut);
  abstract delete(id: string);
  abstract get(id: string);
  abstract search(params: any);
}

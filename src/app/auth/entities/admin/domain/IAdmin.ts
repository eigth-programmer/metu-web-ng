import {IUser} from '../../user/domain/IUser';

export interface IAdmin extends IUser{
  scopes: any[];
}

import {IUser} from '../../../../auth/entities/user/domain/IUser';
import {IBillingAddress} from '../domain/IBillingAddress';

export abstract class BillingAddressAbstractService {
  abstract create(billingAddress: IBillingAddress);
  abstract update(billingAddress: IBillingAddress);
  abstract delete(id: string);
  abstract get(id: string);
  abstract search(params: any);
}

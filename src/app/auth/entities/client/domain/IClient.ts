import {IUser} from '../../user/domain/IUser';
import {IBillingAddress} from '../../../../shared/entities/billing-address/domain/IBillingAddress';

export interface IClient extends IUser{
  billingAddress: IBillingAddress;
  dropAddress: IBillingAddress[];
}

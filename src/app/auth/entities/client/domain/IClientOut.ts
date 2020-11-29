import {IUserOut} from '../../user/domain/IUserOut';
import {IBillingAddress} from '../../../../shared/entities/billing-address/domain/IBillingAddress';

export interface IClientOut extends IUserOut{
  billingAddress: string;
  dropAddress: string[];
}

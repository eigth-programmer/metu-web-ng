import {IBillingAddress} from '../../billing-address/domain/IBillingAddress';
import {IOrderLine} from '../../order-line/domain/IOrderLine';
import {IClient} from '../../../../auth/entities/client/domain/IClient';

export interface IOrder{
  id: string,
  client: IClient,
  billingAddress: IBillingAddress,
  dropAddress: IBillingAddress,
  orderLines: IOrderLine[],
  basePrice: number,
  taxPrice: number,
  paymentMethod: string,
  state: string
}

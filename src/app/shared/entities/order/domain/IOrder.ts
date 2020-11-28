import {IBillingAddress} from '../../billing-address/domain/IBillingAddress';
import {IOrderLine} from '../../order-line/domain/IOrderLine';

export interface IOrder{
  id: string,
  client: string,
  billingAddress: IBillingAddress,
  orderLines: IOrderLine[],
  basePrice: number,
  taxPrice: number,
  paymentMethod: string,
  state: string
}

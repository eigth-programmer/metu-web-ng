import {IBillingAddress} from '../../billing-address/domain/IBillingAddress';
import {IOrderLine} from '../../order-line/domain/IOrderLine';

export interface IOrderOut{
  id?: string,
  client: string,
  billingAddress: string,
  dropAddress: string,
  orderLines: IOrderLine[],
  basePrice: number,
  taxPrice: number,
  paymentMethod: string,
  state: string
}

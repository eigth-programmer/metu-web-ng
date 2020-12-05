import {IAdmin} from '../../../../auth/entities/admin/domain/IAdmin';
import {IOrder} from '../domain/IOrder';
import {IClient} from '../../../../auth/entities/client/domain/IClient';
import {IBillingAddress} from '../../billing-address/domain/IBillingAddress';
import {IOrderLine} from '../../order-line/domain/IOrderLine';

export class OrderMapper {
  mapTo(entry: any): IOrder{
    const {
      id,
      client,
      billingAddress,
      dropAddress,
      orderLines,
      basePrice,
      taxPrice,
      paymentMethod,
      state
    } = entry;

    return {
      id: id,
      client: client,
      billingAddress: billingAddress,
      dropAddress: dropAddress,
      orderLines: orderLines,
      basePrice: basePrice,
      taxPrice: taxPrice,
      paymentMethod: paymentMethod,
      state: state
    };
  }
}

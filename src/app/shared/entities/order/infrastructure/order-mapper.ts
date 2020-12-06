import {IOrder} from '../domain/IOrder';
import {OrderLineMapper} from '../../order-line/infrastructure/order-line-mapper';

export class OrderMapper {
  constructor(private _orderLineMapper: OrderLineMapper) {
  }

  mapTo(entry: any): IOrder {
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
      orderLines: orderLines.map(ol => this._orderLineMapper.mapTo(ol)),
      basePrice: basePrice,
      taxPrice: taxPrice,
      paymentMethod: paymentMethod,
      state: state
    };
  }
}

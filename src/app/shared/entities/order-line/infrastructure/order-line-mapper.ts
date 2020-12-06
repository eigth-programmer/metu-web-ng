import {IOrderLine} from '../domain/IOrderLine';

export class OrderLineMapper {
  mapTo(entry: any): IOrderLine{
    const {price, quantity, product} = entry;

    return {
      price: price,
      quantity: quantity,
      product: product
    };
  }
}

import {OrderMapper} from '../entities/order/infrastructure/order-mapper';
import {OrderLineMapper} from '../entities/order-line/infrastructure/order-line-mapper';
import {IOrderOut} from '../entities/order/domain/IOrderOut';
import {OrderAbstractService} from '../entities/order/infrastructure/order-abstract-service';

export class OrderFacade {
  constructor(private _orderMapper: OrderMapper,
              private _orderLineMapper: OrderLineMapper) {
  }

  create(order: IOrderOut, service: OrderAbstractService) {

  }

  update(order: IOrderOut, service: OrderAbstractService) {

  }

  search(query: any, service: OrderAbstractService) {

  }

  delete(id: string, service: OrderAbstractService) {

  }
}

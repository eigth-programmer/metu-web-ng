import {OrderMapper} from '../entities/order/infrastructure/order-mapper';
import {OrderLineMapper} from '../entities/order-line/infrastructure/order-line-mapper';
import {IOrderOut} from '../entities/order/domain/IOrderOut';
import {OrderAbstractService} from '../entities/order/infrastructure/order-abstract-service';

export class OrderFacade {
  private _service: OrderAbstractService;

  constructor(private _orderMapper: OrderMapper,
              private _orderLineMapper: OrderLineMapper) {
  }

  create(order: IOrderOut) {
    return this._service.create(order);
  }

  update(order: IOrderOut) {
    return this._service.update(order);
  }

  search(query: any) {
    return this._service.search(query);
  }

  delete(id: string) {
    return this._service.delete(id);
  }
}

import {OrderMapper} from '../entities/order/infrastructure/order-mapper';
import {IOrderOut} from '../entities/order/domain/IOrderOut';
import {OrderAbstractService} from '../entities/order/infrastructure/order-abstract-service';
import {map, toArray} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderFacade {
  private _service: OrderAbstractService;

  constructor(private _mapper: OrderMapper) {
  }

  create(order: IOrderOut) {
    return this._service.create(order).pipe(map(this._mapper.mapTo));
  }

  update(order: IOrderOut) {
    return this._service.update(order).pipe(map(this._mapper.mapTo));
  }

  search(query: any) {
    return this._service.search(query)
      .pipe(
        map(this._mapper.mapTo),
        toArray()
      );
  }

  delete(id: string) {
    return this._service.delete(id);
  }
}

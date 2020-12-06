import {BillingAddressMapper} from '../entities/billing-address/infrastructure/billing-address-mapper';
import {IBillingAddress} from '../entities/billing-address/domain/IBillingAddress';
import {BillingAddressAbstractService} from '../entities/billing-address/infrastructure/billing-address-abstract-service';
import {map} from 'rxjs/operators';

export class BillingAddressFacade {
  private _service: BillingAddressAbstractService;

  constructor(private _mapper: BillingAddressMapper) {
  }

  create(address: IBillingAddress) {
    return this._service.create(address).pipe(map(this._mapper.mapTo));
  }

  update(address: IBillingAddress) {
    return this._service.update(address).pipe(map(this._mapper.mapTo));
  }

  delete(id: string) {
    return this._service.delete(id);
  }
}

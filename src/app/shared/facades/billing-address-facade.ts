import {BillingAddressMapper} from '../entities/billing-address/infrastructure/billing-address-mapper';
import {IBillingAddress} from '../entities/billing-address/domain/IBillingAddress';
import {BillingAddressAbstractService} from '../entities/billing-address/infrastructure/billing-address-abstract-service';

export class BillingAddressFacade {
  private _service: BillingAddressAbstractService;

  constructor(private _mapper: BillingAddressMapper) {
  }

  create(address: IBillingAddress) {
    return this._service.create(address);
  }

  update(address: IBillingAddress) {
    return this._service.update(address);
  }

  delete(id: string) {
    return this._service.delete(id);
  }
}

import {BillingAddressMapper} from '../entities/billing-address/infrastructure/billing-address-mapper';
import {IBillingAddress} from '../entities/billing-address/domain/IBillingAddress';
import {BillingAddressAbstractService} from '../entities/billing-address/infrastructure/billing-address-abstract-service';

export class BillingAddressFacade {
  constructor(private _mapper: BillingAddressMapper) {
  }

  create(address: IBillingAddress, service: BillingAddressAbstractService) {

  }

  update(address: IBillingAddress, service: BillingAddressAbstractService) {

  }

  delete(id: string, service: BillingAddressAbstractService) {

  }
}

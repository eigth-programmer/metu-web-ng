import {TaxMapper} from '../entities/tax/infrastructure/tax-mapper';
import {ITax} from '../entities/tax/domain/ITax';
import {TaxAbstractService} from '../entities/tax/infrastructure/tax-abstract-service';

export class TaxFacade {
  constructor(private _mapper: TaxMapper) {
  }

  create(tax: ITax, service: TaxAbstractService) {

  }

  search(query: any, service: TaxAbstractService) {

  }

  delete(id: string, service: TaxAbstractService) {

  }
}

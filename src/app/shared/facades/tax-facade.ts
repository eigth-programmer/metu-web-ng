import {TaxMapper} from '../entities/tax/infrastructure/tax-mapper';
import {ITax} from '../entities/tax/domain/ITax';
import {TaxAbstractService} from '../entities/tax/infrastructure/tax-abstract-service';

export class TaxFacade {
  private _service: TaxAbstractService;

  constructor(private _mapper: TaxMapper) {
  }

  create(tax: ITax) {
    return this._service.create(tax);
  }

  search(query: any) {
    return this._service.search(query);
  }

  delete(id: string) {
    return this._service.delete(id);
  }
}

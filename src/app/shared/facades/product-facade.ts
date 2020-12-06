import {ProductMapper} from '../entities/product/infrastructure/product-mapper';
import {IProductOut} from '../entities/product/domain/IProductOut';
import {ProductAbstractService} from '../entities/product/infrastructure/product-abstract-service';
import {map, toArray} from 'rxjs/operators';

export class ProductFacade {
  private _service: ProductAbstractService;

  constructor(private _mapper: ProductMapper) {
  }

  create(product: IProductOut) {
    return this._service.create(product).pipe(map(this._mapper.mapTo));
  }

  update(product: IProductOut) {
    return this._service.update(product).pipe(map(this._mapper.mapTo));
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

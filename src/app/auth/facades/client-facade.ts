import {UserAbstractService} from '../entities/user/infrastructure/user-abstract-service';
import {ClientMapper} from '../entities/client/infrastructure/client-mapper';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientFacade {
  private _service: UserAbstractService;

  constructor(private _mapper: ClientMapper) {
  }

  get(id: string) {
    return this._service.get(id).pipe(map(this._mapper.mapTo));
  }
}

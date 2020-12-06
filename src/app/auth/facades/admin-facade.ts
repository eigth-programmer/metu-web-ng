import {UserAbstractService} from '../entities/user/infrastructure/user-abstract-service';
import {AdminMapper} from '../entities/admin/infrastructure/admin-mapper';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminFacade {
  private _service: UserAbstractService;

  constructor(private _mapper: AdminMapper) {
  }

  get(id: string) {
    return this._service.get(id).pipe(map(this._mapper.mapTo));
  }
}

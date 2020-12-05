import {IAdmin} from '../../../../auth/entities/admin/domain/IAdmin';
import {IBillingAddress} from '../domain/IBillingAddress';

export class BillingAddressMapper {
  mapTo(entry: any): IBillingAddress{
    const {id,
      country,
      city,
      street,
      number,
      floor,
      door,
      postCode} = entry;

    return {
      id: id,
      country: country,
      city: city,
      street: street,
      number: number,
      floor: floor,
      door: door,
      postCode: postCode
    };
  }
}

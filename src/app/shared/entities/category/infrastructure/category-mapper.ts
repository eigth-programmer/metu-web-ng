import {IAdmin} from '../../../../auth/entities/admin/domain/IAdmin';
import {ICategory} from '../domain/ICategory';

export class CategoryMapper {
  mapTo(entry: any): ICategory{
    const {id, name} = entry;

    return {
      id: id,
      name: name
    };
  }
}

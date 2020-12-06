import {ITax} from '../domain/ITax';


export class TaxMapper {
  mapTo(entry: any): ITax{
    const {id, name, value} = entry;

    return {
      id: id,
      name: name,
      value: value
    };
  }
}

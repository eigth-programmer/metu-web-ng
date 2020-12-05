import {IProduct} from '../domain/IProduct';

export class ProductMapper {
  mapTo(entry: any): IProduct{
    const {
      id,
      name,
      price,
      description,
      taxes,
      images,
      reviews,
      categories} = entry;

    return {
      id: id,
      name: name,
      price: price,
      description: description,
      taxes: taxes,
      images: images,
      reviews: reviews,
      categories: categories
    };
  }
}

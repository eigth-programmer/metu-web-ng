/**This is the endpoint config file for shared module*/
import {environment} from '../../../environments/environment';

export const endpoints = {
  tax: environment.apiURL + '/taxes',
  review: environment.apiURL + '/reviews',
  product: environment.apiURL + '/products',
  order: environment.apiURL + '/orders',
  category: environment.apiURL + '/categories',
  billingAddress: environment.apiURL + '/addresses',
};

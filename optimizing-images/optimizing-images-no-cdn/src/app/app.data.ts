import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PRODUCTS } from './models/product-data.mock';
import { Product } from './models/product';

export class AppData implements InMemoryDbService {
  createDb(): {products: Product[]} {
      const products = PRODUCTS;
      return { products }
  }
}

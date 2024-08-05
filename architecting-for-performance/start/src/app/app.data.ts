import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PRODUCTS } from './models/product-data.mock';
import { Product } from './models/product';
import { FEATURE_FLAGS_DATA, FeatureFlagNames } from './models/feature-flag-data';

export class AppData implements InMemoryDbService {
  createDb(): {products: Product[], featureFlags: Record<FeatureFlagNames, boolean>, log: number} {
      const products = PRODUCTS;
      const featureFlags = FEATURE_FLAGS_DATA;
      const log = 200;
      return { products, featureFlags, log }
  }
}

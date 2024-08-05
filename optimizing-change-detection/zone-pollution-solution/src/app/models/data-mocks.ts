import { Category } from './category';
import { Product } from './product';

export const createProduct = (partial: Partial<Product> = {}): Product => ({
  image: 'image',
  thumb: 'thumb',
  title: 'title',
  price: 13.99,
  description: 'description',
  tags: ['tag 1', 'tag 2'],
  category: Category.GLASSES,
  id: 'id',
  ...partial
});

import { Injectable, computed, inject, signal } from '@angular/core';
import { Product } from '../models/product';
import { Category } from '../models/category';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly httpClient = inject(HttpClient);
  readonly selectedCategory = signal<string>(Category.ALL);
  readonly selectedProductId = signal<string | undefined>(undefined);
  readonly products = toSignal(this.httpClient.get<Product[]>('api/products'), {
    initialValue: [] as Product[]
  });


  readonly homeProducts = computed(() => {
    if(this.products().length > 0) {
      const middle = Math.floor(this.products().length / 2);

      return [this.products()[0], this.products()[middle], this.products()[this.products().length - 1]];
    }
    return [];
  });

  readonly filteredProducts = computed(() => {
    return this.selectedCategory() === Category.ALL
      ? this.products()
      : this.products().filter((product) => product.category.toLowerCase() === this.selectedCategory().toLowerCase())
  })

  readonly filteredProducts$ = toObservable(this.filteredProducts);

  readonly selectedProduct = computed(() => {
    return this.products().find((product) => product.id === this.selectedProductId()) || this.firstInCategory();
  });

  readonly firstInCategory = computed(() => this.filteredProducts()[0]);
}

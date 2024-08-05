import { Injectable, computed, inject, signal } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  readonly cartItems = signal<{[key: string]: { quantity: number }}>({
    ['cat-costume']: {quantity: 2},
    ['overalls-puppy']: {quantity: 1},
    ['hoodie-bulldog']: {quantity: 1},
  });
  readonly productService = inject(ProductService);

  readonly cartItemsPlusQuantity = computed(() => {
    return Object.keys(this.cartItems()).reduce((acc, key) => {
      const product = this.productService.products().find((product) => product.id === key);

      if(product) {
        acc.push({
          ...product,
          quantity: this.cartItems()[key].quantity
        });
      }

      return acc;
    }, [] as Product[]);
  });

  readonly selectedItemPlusQuantity = computed(() => {
    const key = this.productService.selectedProduct().id;
    return key ? {
      ...this.productService.selectedProduct(),
      quantity: this.cartItems()[key]?.quantity || 0
    } as Product : undefined;
  });

  readonly featuredProductsPlusQuantity = computed(() => {
    return this.productService.homeProducts().map((product) => ({
      ...product,
      quantity: this.cartItems()[product.id]?.quantity || 0
    }))
  });

  readonly subtotal = computed(() => {
    return Object.keys(this.cartItems()).reduce((acc, key) => {
      const product = this.productService.products().find((product) => product.id === key);

      if(product) {
        return acc + ((this.cartItems()[key].quantity || 0) * product.price);
      }

      return acc;
    }, 0);
  });

  readonly salesTax = computed(() => {
    return this.subtotal() * .0625;
  });

  readonly shipping = computed(() => {
    return this.subtotal() * .05;
  });

  readonly total = computed(() => {
    return this.subtotal() + this.shipping() + this.salesTax();
  });

  readonly totalItems = computed(() => {
    return Object.keys(this.cartItems()).reduce((acc, key) => {
      const product = this.productService.products().find((product) => product.id === key);

      if(product) {
        return acc + this.cartItems()[key].quantity || 0;
      }

      return acc;
    }, 0);
  });

  addCartItem (id?: string) {
    if(id){
      this.cartItems.set({
        ...this.cartItems(),
        [id]: {
          quantity: this.cartItems()[id]?.quantity ? this.cartItems()[id].quantity + 1 : 1
        }
      })
    }
  }

  decrementCartItem (id?: string) {
    if(id) {
      const updatedCartItems = {
        ...this.cartItems(),
        [id]: {
          quantity: this.cartItems()[id]?.quantity ? this.cartItems()[id].quantity - 1 : 0
        }
      }

      if(updatedCartItems[id].quantity <= 0){
        delete updatedCartItems[id];
      }

      this.cartItems.set(updatedCartItems);
    }
  }
}

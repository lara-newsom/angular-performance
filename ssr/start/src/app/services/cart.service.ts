import { Injectable, computed, inject, signal } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../models/product';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  readonly productService = inject(ProductService);
  readonly userService = inject(UserService);
  readonly httpClient = inject(HttpClient);
  constructor() {
    this.httpClient.get<Record<string, Record<string, number>>>('http://localhost:3000/cartItems').subscribe((cartItems) =>
      this.allCartItems.set(cartItems))
  }
  readonly allCartItems = signal({['']: {} as Record<string, number>} as Record<string, Record<string,number>>);
  readonly cartItems = computed(() => {
    const userId = this.userService.loggedInUser()?.userName ?? '';
    return this.allCartItems()[userId] ?? {} as Record<string, number>;
  })

  readonly cartItemsPlusQuantity = computed(() => {
    return Object.keys(this.cartItems()).reduce((acc, key) => {
      const product = this.productService.products().find((product) => product.id === key);

      if(product) {
        acc.push({
          ...product,
          quantity: this.cartItems()[key]
        });
      }

      return acc;
    }, [] as Product[]);
  });

  readonly selectedItemPlusQuantity = computed(() => {
    const key = this.productService.selectedProduct().id;
    return key ? {
      ...this.productService.selectedProduct(),
      quantity: this.cartItems()[key] || 0
    } as Product : undefined;
  });

  readonly featuredProductsPlusQuantity = computed(() => {
    return this.productService.homeProducts().map((product) => ({
      ...product,
      quantity: this.cartItems()[product.id] || 0
    }))
  });

  readonly subtotal = computed(() => {
    return Object.keys(this.cartItems()).reduce((acc, key) => {
      const product = this.productService.products().find((product) => product.id === key);

      if(product) {
        return acc + ((this.cartItems()[key] || 0) * product.price);
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
      return acc + this.cartItems()[key];
    }, 0);
  });

  addCartItem (id?: string) {
    if(id){
      const userId = this.userService.userId();
      this.allCartItems.set({
        ...this.allCartItems(),
        [userId]: {
          ...this.allCartItems()[userId],
          [id]: this.allCartItems()[userId][id] ? this.allCartItems()[userId][id] + 1 : 1
        }
      })
    }
  }

  decrementCartItem (id?: string) {
    if(id) {
      const userId = this.userService.userId();
      const updatedCartItems = {
        ...this.allCartItems(),
        [userId]: {
          ...this.allCartItems()[userId],
          [id]: this.allCartItems()[userId][id] ? this.allCartItems()[userId][id] - 1 : 0
        }
      }

      if(updatedCartItems[userId][id] <= 0){
        delete updatedCartItems[userId][id];
      }

      this.allCartItems.set(updatedCartItems);
    }
  }

  checkoutUser() {
    const userId = this.userService.userId();
    const updatedCartItems = {
      ...this.allCartItems(),
      [userId]: {} as Record<string, number>
    }
    this.allCartItems.set(updatedCartItems);
  }
}

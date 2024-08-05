import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ProductService } from '../services';
import { CurrencyPipe, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { AddToCartButtonComponent } from '../shared-ui/add-to-cart-button/add-to-cart-button.component';
import { Product } from '../models/product';

type SortableKeys = Pick<Product, 'description' | 'title' | 'category' | 'price' >

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [ CurrencyPipe, UpperCasePipe, AddToCartButtonComponent, NgOptimizedImage],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableViewComponent {
  readonly productService = inject(ProductService);
  readonly sortColumnProperty = signal<keyof SortableKeys | undefined>(undefined);

  readonly products = computed(() => {
    if(this.sortColumnProperty()) {
      return [...this.productService.filteredProducts()].sort((a, b) => this.compareFn(a, b, this.sortColumnProperty()!))
    }
    return this.productService.filteredProducts();
  })
  sortColumn(property: keyof SortableKeys){
    if(this.sortColumnProperty() === property) {
      this.sortColumnProperty.set(undefined);
    } else {
      this.sortColumnProperty.set(property)
    }
  }

  compareFn(a: Product, b: Product, prop: keyof SortableKeys) {
    if (a[prop]!.toString() < b[prop]!.toString()) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return 0;
  }
  templateRendered() {
    console.log('Change Detection in TableViewComponent');
  }
}

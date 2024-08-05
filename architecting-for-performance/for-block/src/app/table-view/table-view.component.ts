import { Component, computed, inject, signal } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { TableRowComponent } from './table-row/table-row.component';

type SortableKeys = Pick<Product, 'description' | 'title' | 'category' | 'price' >

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [ScrollingModule, TableRowComponent],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.scss'
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
}

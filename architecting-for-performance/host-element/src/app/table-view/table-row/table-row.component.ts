import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Product } from '../../models/product';
import { CurrencyPipe, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { AddToCartButtonComponent } from '../../shared-ui/add-to-cart-button/add-to-cart-button.component';

@Component({
  selector: 'tr[table-row]',
  standalone: true,
  imports: [
    CurrencyPipe,
    UpperCasePipe,
    AddToCartButtonComponent,
    NgOptimizedImage
  ],
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableRowComponent {
  readonly product = input.required<Product>();
}

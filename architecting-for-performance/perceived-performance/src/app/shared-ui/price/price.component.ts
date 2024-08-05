import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SaleMessagePipe } from './sale-message.pipe';

@Component({
  selector: 'p[app-price]',
  standalone: true,
  imports: [CurrencyPipe, SaleMessagePipe],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss',
  host: {
    'class': 'price'
  }

})
export class PriceComponent {
  @Input({required: true}) price!: number;
  @Input() salePrice?: number;
}

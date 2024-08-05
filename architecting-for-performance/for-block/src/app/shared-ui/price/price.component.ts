import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'p[app-price]',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss',
  host: {
    'class': 'price'
  }

})
export class PriceComponent {
  @Input({required: true}) price!: number;
  @Input() salePrice?: number;

  onSaleMessage(): string {
    console.log('in on Sale Message');
    if(this.salePrice) {
      const difference = this.price - this.salePrice;
      return `You save $${difference.toFixed(2)} each!!`
    }
    return '';
  }
}

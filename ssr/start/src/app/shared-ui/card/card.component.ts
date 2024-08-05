import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';
import { ROUTE_TOKENS } from '../../models/route-tokens';
import { AddToCartButtonComponent } from '../add-to-cart-button/add-to-cart-button.component';

@Component({
  standalone: true,
  imports: [
    CurrencyPipe,
    RouterLink,
    AddToCartButtonComponent,
    NgOptimizedImage
  ],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input({ required: true }) product!: Product;
  readonly ROUTE_TOKENS = ROUTE_TOKENS;
}

import { Component, inject } from '@angular/core';
import { ProductService } from '../../services';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ROUTE_TOKENS } from '../../models/route-tokens';

@Component({
  standalone: true,
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
  ]
})
export class SideMenuComponent {
  private readonly productService = inject(ProductService);

  readonly products = this.productService.filteredProducts;
  readonly ROUTE_TOKENS = ROUTE_TOKENS;
}

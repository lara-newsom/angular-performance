import { Component, Input, inject, signal } from '@angular/core';
import { ProductService } from '../services/product.service';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TableViewComponent } from '../table-view/table-view.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LOGGER_TOKEN } from '../tokens/logger-token';

@Component({
  standalone: true,
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
  imports: [
    RouterOutlet,
    SideMenuComponent,
    TableViewComponent,
    MatSlideToggleModule,
  ]
})
export class ProductViewComponent{
  @Input() set categoryId(val: string) {
    this.productService.selectedCategory.set(val);
  }
  protected readonly productService = inject(ProductService);
  protected readonly logger = inject(LOGGER_TOKEN,  {
    optional: true
   });

  tableView = signal(false);

  constructor(
    private readonly router: Router
  ) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      takeUntilDestroyed()
    ).subscribe(() => {
        const content = document.querySelector<HTMLElement>('#productDetail');
        if(content){
          content.focus();
        }
      }
    )
  }

  switchView() {
    this.tableView.set(!this.tableView());
  }

  handleRowSelect(event: unknown) {
    this.logger?.log(`showing ${event}`);
    this.tableView.set(false);
  }
}



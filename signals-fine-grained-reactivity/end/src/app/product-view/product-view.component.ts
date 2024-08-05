import { ChangeDetectionStrategy, Component, Input, inject, signal } from '@angular/core';
import { ProductService } from '../services';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RouterOutlet } from '@angular/router';
import { TableViewComponent } from '../table-view/table-view.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductViewComponent {
  @Input() set categoryId(val: string) {
    this.productService.selectedCategory.set(val);
  }
  protected readonly productService = inject(ProductService);

  protected readonly tableView = signal(false)

  switchView() {
    this.tableView.set(!this.tableView());
  }

  handleRowSelect() {
    this.tableView.set(false);
  }

  templateRendered() {
    console.log('Change Detection in ProductViewComponent');
  }
}



import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ProductService } from '../../services';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    CardComponent,
    NgFor,
  ],
  selector: 'app-sub-section',
  templateUrl: './sub-section.component.html',
  styleUrls: ['./sub-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubSectionComponent {
  private readonly productService = inject(ProductService);

  readonly featured = this.productService.homeProducts;

  templateRendered() {
    console.log('Change Detection in SubSectionComponent');
  }
}

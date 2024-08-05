import { ProductViewComponent } from './product-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: ':categoryId',
    component: ProductViewComponent,
    children: [
      {
        path: '',
        component: DetailViewComponent,
      }
    ]
  }
]





import { Routes } from '@angular/router';
import { ROUTE_TOKENS } from './models/route-tokens';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: ROUTE_TOKENS.products,
    loadChildren: () => import('./product-view/product-view.routes').then(m => m.ROUTES),
    title: 'Just Like People - Products',
  },
  {
    path: '',
    redirectTo: ROUTE_TOKENS.home,
    pathMatch: 'full',
  },
  {
    path: ROUTE_TOKENS.home,
    component: HomeComponent,
    title: 'Just Like People - Home',
  },
  {
    path: ROUTE_TOKENS.contact,
    loadChildren: () => import('./contact/contact-routes').then(m => m.CONTACT_ROUTES),
    title: 'Just Like People - Contact',
  },
  {
    path: ROUTE_TOKENS.cart,
    loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent),
    title: 'Just Like People - Cart',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Just Like People - Page Not Found',
  },
];

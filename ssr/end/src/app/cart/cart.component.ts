import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { catchError, ReplaySubject, takeUntil, tap } from 'rxjs';
import { ContactForm } from '../models/contact-form';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ROUTE_TOKENS } from '../models/route-tokens';
import { AddToCartButtonComponent } from '../shared-ui/add-to-cart-button/add-to-cart-button.component';
import { JlpBorderButtonDirective } from '../shared-ui/jlp-border-button.directive';
import { TwoPanelLayoutComponent } from '../shared-ui/two-panel-layout/two-panel-layout.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CartService  } from '../services/cart.service';
import { ContactService  } from '../services/contact.service';
import { LOGGER_TOKEN } from '../tokens/logger-token';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    FormsModule,
    RouterLink,
    AddToCartButtonComponent,
    JlpBorderButtonDirective,
    TwoPanelLayoutComponent,
    MatProgressSpinnerModule,
    NgOptimizedImage
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  readonly cartService = inject(CartService);
  readonly router = inject(Router);
  readonly logger = inject(LOGGER_TOKEN, {
    optional: true
  });
  readonly contactService = inject(ContactService);

  readonly ROUTE_TOKENS = ROUTE_TOKENS;

  destroyed$ = new ReplaySubject<void>(1);

  model: ContactForm = {
    fullName: '',
    email: '',
    phone: '',
    comment: '',
  };
  submitted = false;
  loading = false;

  checkout() {
    this.loading = true;

    this.contactService.submitContactForm(this.model).pipe(
      tap(() => {
        this.submitted = true;
        this.loading = false;
        this.cartService.checkoutUser();
        this.logger?.log(`cart submitted with ${JSON.stringify(this.model)}`);
      }),
      catchError((error) => {
        this.logger?.error(`cart errored with ${JSON.stringify(this.model)}`);
        return error;
      }),
      takeUntil(this.destroyed$)
    ).subscribe()
  }

  returnToProducts() {
    this.router.navigate(['/', ROUTE_TOKENS.products, 'all']);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

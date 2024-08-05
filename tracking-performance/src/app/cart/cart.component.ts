import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ReplaySubject, takeUntil } from 'rxjs';
import { ContactForm } from '../models/contact-form';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ROUTE_TOKENS } from '../models/route-tokens';
import { AddToCartButtonComponent } from '../shared-ui/add-to-cart-button/add-to-cart-button.component';
import { JlpBorderButtonDirective } from '../shared-ui/jlp-border-button.directive';
import { TwoPanelLayoutComponent } from '../shared-ui/two-panel-layout/two-panel-layout.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CartService, ContactService, UnusedService  } from '../services';

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
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  readonly cartService = inject(CartService);
  readonly router = inject(Router);
  readonly contactService = inject(ContactService);
  readonly unusedService = inject(UnusedService);

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
  unusedProperty = 'Literally no one cares';
  private unusedPropertyThatIsPrivate = "No one cares and it's private";

  checkout() {
    this.loading = true;

    this.contactService.submitContactForm(this.model).pipe(
      takeUntil(this.destroyed$)
    ).subscribe(() => {
      this.submitted = true;
      this.loading = false;
      this.cartService.cartItems.set({});
    })
  }

  returnToProducts() {
    this.router.navigate(['/', ROUTE_TOKENS.products, 'all']);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  unusedMethod() {
    console.log('no one cares');
  }

  private otherUnusedMethodThisTimePrivate() {
    console.log('still no one cares')
  }
}

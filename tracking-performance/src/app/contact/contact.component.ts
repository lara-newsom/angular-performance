import { Component, OnDestroy, inject } from '@angular/core';
import { ContactForm } from '../models/contact-form';
import { ContactService } from '../services';
import { takeUntil, tap } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { JlpBorderButtonDirective } from '../shared-ui/jlp-border-button.directive';
import { TwoPanelLayoutComponent } from '../shared-ui/two-panel-layout/two-panel-layout.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  standalone: true,
  imports: [
    FormsModule,
    JlpBorderButtonDirective,
    TwoPanelLayoutComponent,
    MatProgressSpinnerModule,
  ],
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnDestroy{
  private readonly contactService = inject(ContactService);

  model: ContactForm = {
    fullName: '',
    email: '',
    phone: '',
    comment: '',
  };

  submitted = false;
  loading = false;

  private readonly destroyed$ = new ReplaySubject<void>(1);

  submitForm(model: ContactForm) {
    this.submitted = true;
    this.loading = true;

    this.contactService.submitContactForm(model).pipe(
      tap(() => {
        this.loading = false
      }),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

  clearForm() {
    this.model = {
      fullName: '',
      email: '',
      phone: '',
      comment: '',
    };
    this.submitted = false;
  }

  ngOnDestroy(): void {
      this.destroyed$.next();
      this.destroyed$.complete();
  }
}

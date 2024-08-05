import { inject, Injectable } from '@angular/core';
import { ContactForm } from '../models/contact-form';
import { first, tap, timer } from 'rxjs';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly logger = inject(LoggerService,  {
    optional: true
   });

  submitContactForm(model: ContactForm){
    return timer(3000).pipe(
      tap(() => this.logger?.log(`ContactForm Submitted with Values: ${JSON.stringify(model)}`)),
      first()
    )
  }
}

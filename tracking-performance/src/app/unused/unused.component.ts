import { Component, inject } from '@angular/core';
import { AnotherUnusedService } from '../services';

@Component({
  selector: 'app-unused',
  templateUrl: './unused.component.html',
  styleUrl: './unused.component.scss'
})
export class UnusedComponent {
  service = inject(AnotherUnusedService);

  constructor() {
    console.log('In the UnusedComponent')
  }
}

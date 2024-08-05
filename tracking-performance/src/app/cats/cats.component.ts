import { Component, inject } from '@angular/core';
import { PetsService } from '../services/pets.service';

@Component({
  selector: 'app-cats',
  standalone: true,
  imports: [],
  templateUrl: './cats.component.html',
})
export class CatsComponent {
  petsService = inject(PetsService);

  cats = this.petsService.getCats;
}

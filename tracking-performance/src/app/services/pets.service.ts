import { Injectable, inject } from '@angular/core';
import { CatsService } from './cats.service';
import { DogsService } from './dogs.service';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  catsService = inject(CatsService);
  dogsService = inject(DogsService);

  getCats = this.catsService.getCats();

  getDogs = this.dogsService.getDogs();
}



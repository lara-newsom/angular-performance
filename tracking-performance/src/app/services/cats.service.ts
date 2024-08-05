import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor() { }

  getCats() {
    return 'stinky cats';
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  getDogs() {
    return 'big ol dogs';
  }
}

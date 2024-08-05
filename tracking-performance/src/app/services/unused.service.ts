import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnusedService {

  constructor() {
    console.log('I do nothing!')
   }
}


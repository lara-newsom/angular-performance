import { Injectable } from '@angular/core';

@Injectable()
export class NewLoggerService {
  LOGGER = 'TOTALLY DIFFERENT IMPLEMENTATION';
  error(error: string){
    console.error(error);
  }

  log(event: string) {
    const timestamp = new Date();
    console.log(event, timestamp);
  }
}

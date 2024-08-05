import { Injectable } from '@angular/core';
import { AppLoggerToken } from '../tokens/logger-token';

@Injectable()
export class NewLoggerService extends AppLoggerToken {
  LOGGER = 'TOTALLY DIFFERENT IMPLEMENTATION';
  error(error: string){
    console.error(error);
  }

  log(event: string) {
    const timestamp = new Date();
    console.log(event, timestamp);
  }
}

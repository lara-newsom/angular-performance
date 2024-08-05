import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { AppLoggerToken } from '../tokens/logger-token';

@Injectable()
export class LoggerService extends AppLoggerToken {
  LOGGER = 'LOGGER SERVICE IN THE BUNDLE';
  error(error: string){
    console.error(error);
  }

  log(event: string) {
    const timestamp = moment.now();
    console.log(event, timestamp);
  }
}

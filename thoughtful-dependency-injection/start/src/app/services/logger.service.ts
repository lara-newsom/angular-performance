import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class LoggerService {
  LOGGER = 'LOGGER SERVICE IN THE BUNDLE';
  error(error: string){
    console.error(error);
  }

  log(event: string) {
    const timestamp = moment.now();
    console.log(event, timestamp);
  }
}

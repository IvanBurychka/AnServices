import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable()
export class PlainLoggerService implements LoggerService {

  constructor() { }

  error(message: string): void {
    console.log(message);
  }

  log(message: string): void {
    console.log(message);
  }
}

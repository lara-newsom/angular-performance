import { InjectionToken } from "@angular/core";

export abstract class AppLoggerToken {
  abstract log(event: string): void;
  abstract error(error: string): void;
}

export const LOGGER_TOKEN = new InjectionToken<AppLoggerToken>('Logger Service');

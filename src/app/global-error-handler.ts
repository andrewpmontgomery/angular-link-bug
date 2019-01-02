import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  handleError(error: Error): void {
    let handled: boolean = false;
    if (error && error.message && typeof(error.message) === 'string' && error.message.includes('Cannot match any routes')) {
      console.error(error.message.split('\n')[0]); // show error message without stacktrace
	} else {
      throw error;
    }
  }
}

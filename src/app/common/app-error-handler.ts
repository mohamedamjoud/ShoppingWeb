import { AppError } from './app-error';
import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error: AppError) {
        alert('An unexpected error occurred.');
        console.log(error.originalError);
    }
}

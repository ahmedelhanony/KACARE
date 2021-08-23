import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 400:
            // alert(error.status)
            this.toastr.error(error.error.errorMessage, 'Error!');
            break;
          // case 404:
          //     this.router.navigateByUrl('/not-found');
          //     break;
          case 0:
          case 500:
            // this.toastr.error('Sorry, ' + 'Something went wrong', 'Error');
            break;
          case 422:
          case 490:
            if (error.error.errors && typeof error.error.errors === 'object') {
              Object.keys(error.error.errors).map((x) => {
                if (x) {
                  // this.toastr.error('Sorry, ' + error.error.errors[x][0]);
                }
              });
            } else if (error.error && typeof error.error.errors === 'string') {
              // this.toastr.error('Sorry, ' + error.error.errors);
            } else {
              // this.toastr.error('Sorry, ' + error.error.message);
            }
            break;
          case 404:
            this.toastr.error('Sorry, ' + 'Something unexpected went wrong maybe the url is wrong!');
            break;
          default:
            this.toastr.error('Sorry, ' + 'Something unexpected went wrong!');
            break;
        }

        return throwError(error);
      })
    );
  }
}

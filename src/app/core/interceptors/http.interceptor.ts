import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { retry, catchError, finalize, tap } from 'rxjs/operators';
// import { ToastrService } from 'ngx-toastr';

import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
//import { ProgressSpinnerService } from './spinner.service';
import { Router } from '@angular/router';
// import { ProgressBarService } from './progress-bar.service';
import { ProfileService } from '../services/profile.service';
import { NAVIGATIONS } from 'src/app/Shared/utils/enums';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptor implements HttpInterceptor {
  private totalRequests = 0;
  constructor(
    public injector: Injector,
    private profileService: ProfileService,

    private router: Router
  ) {}
  private decreaseRequests() {
    if (this.totalRequests > 0) this.totalRequests--;
    if (this.totalRequests === 0) {
      //   this.spinnerService.hide();
    }
  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // this.spinnerService.show();
    this.totalRequests++;
    return next.handle(request).pipe(
      tap((response) => {
        if (response instanceof HttpResponse) {
          this.decreaseRequests();
        }
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage;
        let i = 0;
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          if (
            error instanceof HttpErrorResponse &&
            error.status === 401 &&
            !this.profileService.currentUser.isAuthenticated
          ) {
            this.router.navigate([NAVIGATIONS.loginPageUrl]);
            // errorMessage = this.translateService.instant(
            //   'Message.SessionExpired'
            // );
          } else if (error.error && error.error.errorMessage) {
            errorMessage = error.error.errorMessage;
          } else if (error.error && error.error.errorCode) {
            errorMessage = `Error Code : ${error.status}\n\Message : ${
              error.message
            }\n\MoreInfo: ${
              error.error.errorMessage
                ? JSON.stringify(error.error.errorMessage)
                : error.error.errorCode
            }`;
          }
          //new ValidationError()
          else if (error.error && Array.isArray(error.error)) {
            errorMessage = '';
            i = 0;
            for (let err of error.error) {
              if (i === 0) errorMessage = err.message;
              else errorMessage += `${errorMessage} \n\ ${err.message}`;
              i++;
            }
          }
          //validations annotations
          else if (error.error && error.error.errors) {
            errorMessage = Object.values(error.error.errors).join('\r\n');
          } else {
            if (error.status == 0) {
              // errorMessage = this.translateService.instant(
              //     'Message.APINotAvilable'
              //     );
              //   !environment.showExceptionDetails
            } else if (false) {
              //   errorMessage = this.translateService.instant(
              //     'Message.InternalServerError'
              //   );
            } else {
              errorMessage = `Error Code : ${error.status}\n\Message : ${
                error.message
              }\n\MoreInfo: ${JSON.stringify(error.error)}`;
            }
          }
        }
        this.decreaseRequests();
        // this.tostrService.error(errorMessage, 'Error');

        return throwError(errorMessage);
      }),

      finalize(() => {
        // this.spinnerService.hide();
      })
    );
  }
}

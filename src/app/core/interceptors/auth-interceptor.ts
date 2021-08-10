import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // Handle request
    // request = this.addAuthHeader(request);
    // Handle response
    return next.handle(request);
  }

  // addAuthHeader(request) {
  // 	const apiToken = environment.API_TOKEN;
  // 	const authHeader = localStorage.getItem('token');
  // 	if (authHeader) {
  // 		return request.clone({
  // 			setHeaders: {
  // 				Authorization: `Bearer ${authHeader}`,
  // 				Language: localStorage.getItem('lang') || 'en',
  // 				Accept: 'application/json',
  // 				enctype: 'multipart/form-data',
  // 				ApiToken: `${apiToken}`,
  // 			},
  // 		});
  // 	} else {
  // 		return request.clone({
  // 			setHeaders: {
  // 				ApiToken: `${apiToken}`,
  // 				Language: localStorage.getItem('lang') || 'en',
  // 			},
  // 		});
  // 	}
  // }
}

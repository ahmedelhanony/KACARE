import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from '../services/profile.service';

@Injectable({ providedIn: 'root' })
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private profileService: ProfileService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.profileService.currentUser.accessToken}`,
        Accept_Language: 'en-US',
      },
    });

    return next.handle(request);
  }
}

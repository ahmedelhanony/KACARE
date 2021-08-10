import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Auth Module
import { AuthService } from './auth.service';

import { SharedDataService } from './sharedData.service';
import { ErrorInterceptor } from '../interceptors/error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const SERVICES = [
  AuthService,
  SharedDataService,
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];

@NgModule({
  imports: [CommonModule],
  providers: [...SERVICES],
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ServicesModule,
      providers: [...SERVICES],
    };
  }
}

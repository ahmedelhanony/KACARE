import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';

import { AuthService } from './services/auth.service';
import { SharedDataService } from './services/sharedData.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { AccountService } from './services/account.service';
import { BaseService } from './services/base.service';
import { DemoService } from './services/demo.service';
import { FAQService } from './services/faq.service';
import { FeasService } from './services/feas.service';
import { LookupService } from './services/lookup.service';
import { MatchMakingService } from './services/matchmaking.service';
import { PdevelopmentService } from './services/pdevelopment.service';
import { POCService } from './services/poc.service';
import { ProfileService } from './services/profile.service';
import { ProgramsService } from './services/program.service';
import { TokenInterceptorService } from './interceptors/token.interceptor';
import { HttpErrorInterceptor } from './interceptors/http.interceptor';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';

const SERVICES = [
  AuthService,
  SharedDataService,
  // AccountService,
  BaseService,
  DemoService,
  FAQService,
  FeasService,
  LookupService,
  MatchMakingService,
  PdevelopmentService,
  POCService,
  ProfileService,
  ProgramsService,
  AdminGuard,
  UserGuard,
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
];

@NgModule({
  imports: [CommonModule],
  providers: [...SERVICES],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}


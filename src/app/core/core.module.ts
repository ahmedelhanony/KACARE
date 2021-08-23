import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';

import { AuthService } from './services/auth.service';
import { SharedDataService } from './services/sharedData.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/error.interceptor';
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
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { DialogService } from './services/dialog-service/dialog.service';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FiltersService } from './services/filters/filters.service';
import { FilterLookupsResolver } from './resolvers/filters-lookups.resolver';

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
  FiltersService,
  AdminGuard,
  UserGuard,
  // FilterLookupsResolver,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  // { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
];

@NgModule({
  imports: [CommonModule, MatDialogModule],
  providers: [
    ...SERVICES,
    {
      provide: MatDialogRef,
      useValue: {},
    },
    DialogService,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

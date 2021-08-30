import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {SatPopoverModule} from "@ncstate/sat-popover";
import {SharedModule} from "./Shared/shared.module";

@NgModule({
  declarations: [AppComponent, ContactUsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressAnimation: "increasing",
      progressBar: true,
      autoDismiss: true,
      timeOut: 5000,
      preventDuplicates: true,
      iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning',
      }
    }),
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    SatPopoverModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

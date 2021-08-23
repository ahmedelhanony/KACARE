import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { SharedModule } from '../Shared/shared.module';
import { BotDetectCaptchaModule } from 'angular-captcha';
import { VerfiyAccountComponent } from './components/verfiy-account/verfiy-account.component';

@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    SignupComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
    VerfiyAccountComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    // BotDetectCaptchaModule,
  ],
})
export class LoginModule {}

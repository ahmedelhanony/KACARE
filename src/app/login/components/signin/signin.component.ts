import {
  AfterViewInit,
  Component,
  Injector,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { CaptchaComponent } from 'angular-captcha';
import { UserModel } from 'src/app/core/models/user/UserModel';
import { BaseComponent } from 'src/app/Shared/components/base/base.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent
  extends BaseComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  adminView: any;
  isPortalView = true;
  loginForm!: FormGroup;
  passwordFieldType!: boolean;

  @ViewChild(CaptchaComponent, { static: true })
  captchaComponent!: CaptchaComponent;

  constructor(
    public injector: Injector,
    private fb: RxFormBuilder
  ) {
    super(injector);
  }

  ngOnInit() {
    this.adminView = this.route.snapshot.data.isPortalView;
    this.captchaComponent.captchaEndpoint = environment.captcha_URL;
    let user = new UserModel();
    this.loginForm = this.fb.formGroup(UserModel, user);
  }

  ngAfterViewInit(): void {
    // var x : any = document.querySelectorAll('[title~="BotDetect"]');
    // debugger
    // x.css('visibility','hidden');
    // console.log('xxxxxxxxxxxxxxxxx', x);
  }

  toggleFieldType() {
    this.passwordFieldType = !this.passwordFieldType;
  }

  login() {
    if (this.loginForm.invalid) {
      this.captchaComponent.reloadImage();

      return;
    }

    this.loginForm.patchValue({
      captchaId: this.captchaComponent.captchaId,
      userEnteredCaptchaCode: this.captchaComponent.userEnteredCaptchaCode,
    });

    this.accountService.signIn(this.loginForm.value).subscribe(
      (response: any) => {
        console.log(response);
        if (response.success == false) {
          this.captchaComponent.reloadImage();
          return;
        } else if (response.token && response.userInfo) {
          this.profileService.setToken(response.token);
          this.profileService.setProfile(response.userInfo);
          this.navigateAfterLogin();

          // this.translateService
          //   .get('Message.LoginSuccessfully')
          //   .subscribe((res: string) => {
          //     this.toastr.success(res);
          //   });
        }
      },
      (error) => {
        this.captchaComponent.reloadImage();
      }
    );
  }

  ngOnDestroy() {
    // this.adminView.unsubscribe();
  }
}

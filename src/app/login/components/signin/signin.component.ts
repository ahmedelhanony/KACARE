import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { CaptchaComponent } from 'angular-captcha';
import { UserModel } from 'src/app/core/models/user/UserModel';
import { DialogService } from 'src/app/core/services/dialog-service/dialog.service';
import { BaseComponent } from 'src/app/Shared/components/base/base.component';
import { DefaultConfirmationOptions } from 'src/app/Shared/utils/dialog-options';
import { FORMLABELS } from 'src/app/Shared/utils/enums';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent extends BaseComponent implements OnInit {
  adminView: any;
  isPortalView = true;
  loginForm!: FormGroup;
  passwordFieldType!: boolean;
  showSpinner = false;
  @ViewChild(CaptchaComponent, { static: true })
  captchaComponent!: CaptchaComponent;

  public get SINGINFORMLABELS(): typeof FORMLABELS {
    return FORMLABELS;
  }

  constructor(
    public injector: Injector,
    private fb: RxFormBuilder,
    private dialogService: DialogService
  ) {
    super(injector);
  }

  ngOnInit() {
    this.adminView = this.route.snapshot.data.isPortalView;
    this.captchaComponent.captchaEndpoint = environment.captcha_URL;
    this.loginForm = this.fb.formGroup(UserModel, new UserModel());
  }

  toggleFieldType() {
    this.passwordFieldType = !this.passwordFieldType;
  }

  login() {
    if (this.loginForm.invalid) {
      this.captchaComponent.reloadImage();
      return;
    }

    this.showSpinner = true;

    this.loginForm.patchValue({
      captchaId: this.captchaComponent.captchaId,
      userEnteredCaptchaCode: this.captchaComponent.userEnteredCaptchaCode,
    });

    this.accountService.signIn(this.loginForm.value).subscribe(
      (response: any) => {
        this.showSpinner = false;
        if (response.success == false) {
          this.captchaComponent.reloadImage();
          return;
        } else if (response.token && response.userInfo) {
          this.dialogService.open(
            DefaultConfirmationOptions({ message: 'Logged in successfully.' })
          );
          setTimeout(() => {
            this.dialogService.closeDialog();
          }, 3000);

          this.profileService.setToken(response.token);
          this.profileService.setProfile(response.userInfo);
          this.navigateAfterLogin();
        }
      },
      (error) => {
        this.showSpinner = false;
      }
    );
  }
}

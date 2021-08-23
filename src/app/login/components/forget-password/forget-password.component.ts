import { Component, OnInit } from '@angular/core';
import { ForgetPassModel } from 'src/app/core/models/user/ResetViewModel';
import { AccountService } from 'src/app/core/services/account.service';
import { DialogService } from 'src/app/core/services/dialog-service/dialog.service';
import { DefaultConfirmationOptions, DefaultDeletionOptions } from 'src/app/Shared/utils/dialog-options';
import { AuthPages, AUTHPAGESNAME } from 'src/app/Shared/utils/enums';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  authConfig!: AuthPages;
  showSpinner = false;

  constructor(
    private accountService: AccountService,
    private dialogService: DialogService
  ) {
    this.authConfig = new AuthPages(
      ForgetPassModel,
      AUTHPAGESNAME.FORGETPASS,
      'assets/images/door-key.svg',
      'Did you forget password ?!',
      'Reset Password',
      'Recover your account. We will send you a link to change your password.'
    );
  }
  ngOnInit(): void {}

  onReceiveFormValue(formValue: any) {
    this.showSpinner = true;
    this.sendNewPassword(formValue);
  }

  sendNewPassword(formValue: any) {
    this.accountService.sendResetToken(formValue).subscribe(
      (response: any) => {
        this.dialogService.open(DefaultConfirmationOptions());
        this.showSpinner = false;
        if (response.success == false) {
          // this.captchaComponent.reloadImage();
          // this.showSpinner = false;
          return;
        } else {
          // this.router.navigate([NAVIGATIONS.loginPageUrl]);

          // this.translateService
          //   .get('Message.RegistrationDoneSuccessfully')
          //   .subscribe((res: string) => {
          //     this.toastr.success(res);
          //   });
        }
      },
      (error) => {
        this.showSpinner = false;
        // this.captchaComponent.reloadImage();
        // this.showSpinner = false;
      }
    );
  }
}

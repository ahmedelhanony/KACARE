import { Component, OnInit } from '@angular/core';
import { ResetPassModel } from 'src/app/core/models/user/ResetViewModel';
import { AccountService } from 'src/app/core/services/account.service';
import { DialogService } from 'src/app/core/services/dialog-service/dialog.service';
import {
  DefaultConfirmationOptions,
  DefaultDeletionOptions,
} from 'src/app/Shared/utils/dialog-options';
import { AuthPages, AUTHPAGESNAME } from 'src/app/Shared/utils/enums';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  authConfig!: AuthPages;
  showSpinner = false;

  constructor(
    private accountService: AccountService,
    private dialogService: DialogService
  ) {
    this.authConfig = new AuthPages(
      ResetPassModel,
      AUTHPAGESNAME.RESETPASS,
      'assets/images/password.svg',
      'Reset Password ?!',
      'Reset Password'
    );
  }

  ngOnInit(): void {}

  onReceiveFormValue(formValue: any) {
    this.showSpinner = true;
    this.resetPassword(formValue);
  }

  resetPassword(formValue: any) {
    this.accountService.resetPassword(formValue).subscribe(
      (response: any) => {
        // this.showPopup();
        this.dialogService.open(DefaultDeletionOptions());

        this.dialogService.confirmed().subscribe((confirmed) => {
          if (confirmed) {
            //do something if confirmed is true
          }
        });

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

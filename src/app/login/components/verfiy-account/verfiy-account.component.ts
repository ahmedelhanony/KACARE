import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { VerifyModel } from 'src/app/core/models/user/VerifyModel';
import { AccountService } from 'src/app/core/services/account.service';
import { DialogService } from 'src/app/core/services/dialog-service/dialog.service';
import { ConfirmationPopupComponent } from 'src/app/Shared/confirmation-popup/confirmation-popup.component';
import { DefaultConfirmationOptions } from 'src/app/Shared/utils/dialog-options';
import {
  AuthPages,
  AUTHPAGESNAME,
  NAVIGATIONS,
} from 'src/app/Shared/utils/enums';

@Component({
  selector: 'app-verfiy-account',
  templateUrl: './verfiy-account.component.html',
  styleUrls: ['./verfiy-account.component.scss'],
})
export class VerfiyAccountComponent implements OnInit {
  authConfig!: AuthPages;
  showSpinner = false;

  constructor(
    private accountService: AccountService,
    private router: Router,
    public dialog: MatDialog,
    private dialogService: DialogService
  ) {
    this.authConfig = new AuthPages(
      VerifyModel,
      AUTHPAGESNAME.VERFIYACCOUNT,
      'assets/images/password.svg',
      'Verify Account ?!',
      'Verify'
    );
  }
  ngOnInit() {}

  onReceiveFormValue(formValue: any) {
    this.showSpinner = true;
    this.verifyAccount(formValue);
  }

  verifyAccount(formValue: any) {
    this.accountService.verify(formValue).subscribe(
      (response: any) => {
        // this.dialogService.open(DefaultConfirmationOptions());
        this.showSpinner = false;
        if (response.success == false) {
          // this.captchaComponent.reloadImage();
          // this.showSpinner = false;
          // return;
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

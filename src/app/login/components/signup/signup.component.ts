import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { CaptchaComponent } from 'angular-captcha';
import { LookupsModel } from 'src/app/core/models/common/lookups.model';
import { NewAccount } from 'src/app/core/models/user/NewAccount';
import { BaseComponent } from 'src/app/Shared/components/base/base.component';
import { NAVIGATIONS, SERVICES, FORMLABELS } from 'src/app/Shared/utils/enums';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent extends BaseComponent implements OnInit {
  registerForm!: FormGroup;
  public get SINGUPFORMLABELS(): typeof FORMLABELS {
    return FORMLABELS;
  }
  generalRoles = new Array<LookupsModel>();
  passwordFieldType!: boolean;
  passwordConfirmFieldType!: boolean;
  @ViewChild(CaptchaComponent, { static: true })
  captchaComponent!: CaptchaComponent;
  showSpinner = false;
  constructor(public injector: Injector, private fb: RxFormBuilder) {
    super(injector);
  }

  ngOnInit() {
    this.getGeneralRoles();
    this.captchaComponent.captchaEndpoint = environment.captcha_URL;
    this.registerForm = this.fb.formGroup(NewAccount, new NewAccount());
  }

  getGeneralRoles() {
    this.lookupService
      .getAll(SERVICES.ProjectRole)
      .subscribe((response: LookupsModel[]) => {
        if (response && response.length) {
          this.generalRoles = response;
        }
      });
  }

  register() {
    this.showSpinner = true;
    if (this.registerForm.invalid) {
      this.captchaComponent.reloadImage();
      this.showSpinner = false;
      return;
    }

    this.registerForm.patchValue({
      captchaId: this.captchaComponent.captchaId,
      userEnteredCaptchaCode: this.captchaComponent.userEnteredCaptchaCode,
    });

    this.accountService.createAccount(this.registerForm.value).subscribe(
      (response: any) => {
        if (response.success == false) {
          this.captchaComponent.reloadImage();
          this.showSpinner = false;
          return;
        } else {
          // TO_DO
          this.router.navigate([NAVIGATIONS.homePage]);
        }
      },
      (error) => {
        this.captchaComponent.reloadImage();
        this.showSpinner = false;
      }
    );
  }

  toggleFieldType() {
    this.passwordFieldType = !this.passwordFieldType;
  }

  toggleFieldConfirm() {
    this.passwordConfirmFieldType = !this.passwordConfirmFieldType;
  }
}

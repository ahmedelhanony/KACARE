import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { CaptchaComponent } from 'angular-captcha';
import {
  ForgetPassModel,
  ResetPassModel,
} from 'src/app/core/models/user/ResetViewModel';
import { VerifyModel } from 'src/app/core/models/user/VerifyModel';
import { environment } from 'src/environments/environment';
import { AuthPages, AUTHPAGESNAME, FORMLABELS } from '../../utils/enums';

@Component({
  selector: 'app-shared-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  @Input()
  authConfig!: AuthPages;
  @Input() showSpinner = false;
  @Output() emitFormValue = new EventEmitter();

  public get AUTHPAGESNAME(): typeof AUTHPAGESNAME {
    return AUTHPAGESNAME;
  }
  @ViewChild(CaptchaComponent, { static: true })
  captchaComponent!: CaptchaComponent;
  public get AUTHFORMLABELS(): typeof FORMLABELS {
    return FORMLABELS;
  }
  authForm!: FormGroup;
  authModel: any;
  baseClassModel = ForgetPassModel || ResetPassModel || VerifyModel;

  passwordFieldType!: boolean;
  passwordConfirmFieldType!: boolean;

  constructor(private fb: RxFormBuilder, private route: ActivatedRoute) {}

  ngOnInit() {
    this.captchaComponent.captchaEndpoint = environment.captcha_URL;

    this.addAuthModel(this.authConfig.modelName);

    // switch (this.authConfig.pageName) {
    //   case AUTHPAGESNAME.FORGETPASS:
    //     this.addAuthModel(ForgetPassModel);
    //     break;
    //   case AUTHPAGESNAME.RESETPASS:
    //     this.addAuthModel(ResetPassModel);
    //     break;
    //   case AUTHPAGESNAME.VERFIYACCOUNT:
    //     this.addAuthModel(VerifyModel);
    //     break;
    // }

    this.authForm = this.fb.formGroup(this.baseClassModel, this.authModel);

    this.getTokenFromQueryParams();
  }

  addAuthModel(model: any) {
    this.authModel = new model();
    this.baseClassModel = model;
  }

  getTokenFromQueryParams() {
    this.route.queryParams.subscribe((params: any) => {
      if (params) {
        if (params['email']) {
          this.authForm.controls['email'].setValue(params['email']);
        }

        if (params['token']) {
          this.authForm.controls['verificationCode'].setValue(params['token']);
        }
      }
    });
  }

  toggleFieldType() {
    this.passwordFieldType = !this.passwordFieldType;
  }

  toggleFieldConfirm() {
    this.passwordConfirmFieldType = !this.passwordConfirmFieldType;
  }

  onEmitForm() {
    this.authForm.patchValue({
      captchaId: this.captchaComponent.captchaId,
    });

    this.emitFormValue.emit(this.authForm.value);
  }
}

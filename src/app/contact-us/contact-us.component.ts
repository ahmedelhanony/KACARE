import {
  Component,
  Injector,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { CaptchaComponent } from 'angular-captcha';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { ContactUsModel } from '../core/models/common/contact-us.model';
import { ContactUsService } from '../core/services/contact-us.service';
import { BaseComponent } from '../Shared/components/base/base.component';
import { FORMLABELS } from '../Shared/utils/enums';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent
  extends BaseComponent
  implements OnInit
{
  contactUsForm!: FormGroup;
  @ViewChild(CaptchaComponent, { static: true })
  captchaComponent!: CaptchaComponent;

  showSpinner = false;

  public get CONTACTUSFORMLABELS(): typeof FORMLABELS {
    return FORMLABELS;
  }

  constructor(
    public injector: Injector,
    private fb: RxFormBuilder,
    private contactUsService: ContactUsService,
    private toaster: ToastrService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.captchaComponent.captchaEndpoint = environment.captcha_URL;

    this.contactUsForm = this.fb.formGroup(
      ContactUsModel,
      new ContactUsModel()
    );
  }

  onSendMessage() {
    if (this.contactUsForm.invalid) {
      this.captchaComponent.reloadImage();
      return;
    }

    this.showSpinner = true;

    this.contactUsForm.patchValue({
      captchaId: this.captchaComponent.captchaId,
      userEnteredCaptchaCode: this.captchaComponent.userEnteredCaptchaCode,
    });

    this.contactUsService.addMessage(this.contactUsForm.value).subscribe(
      (response: any) => {
        this.showSpinner = false;
        if (response.success == false) {
          this.captchaComponent.reloadImage();
          return;
        } else if (response && !response.status) {
          this.toaster.success('Your message has been sent successfully.');
        }
      },
      (error) => {
        this.showSpinner = false;
      }
    );
  }
}

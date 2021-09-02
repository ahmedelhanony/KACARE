import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { NewProgramModel } from 'src/app/core/models/program/new-program-model';
import * as _ from 'lodash';
import { APPLICATIONAMES } from 'src/app/Shared/utils/applications-data';
import { LookupService } from 'src/app/core/services/lookup.service';
import { SERVICES } from 'src/app/Shared/utils/enums';
@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss'],
})
export class GeneralInfoComponent implements OnInit {
  // @Input() formModel: any;
  @Input() generalInfoForm!: FormGroup;
  @Input() appName!: string;

  // @Input() disabled!: boolean;

  // email = new FormControl('', [Validators.required, Validators.email]);
  public get APPNAMES(): typeof APPLICATIONAMES {
    return APPLICATIONAMES;
  }

  getErrorMessage() {
    // if (this.email.hasError('required')) {
    //   return 'You must enter a value';
    // }
    // return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  bidderClassifications: any = [];

  constructor(private lookupService: LookupService) {
    // this.generalInfoForm = this.fb.formGroup(
    //   NewProgramModel,
    //   new NewProgramModel()
    // );
  }

  ngOnInit(): void {
    if (this.appName === this.APPNAMES.POC) {
      this.getBidderClassifications();
    }
  }

  getBidderClassifications() {
    this.lookupService
      .getAll(SERVICES.BidderClassification)
      .subscribe((res: any) => {
        if (res && res.length) {
          this.bidderClassifications = [...res];
        }
      });
  }

  // ngOnChanges(changes: SimpleChanges): void {
  // if (
  //   changes.appDetails &&
  //   !_.isEqual(
  //     changes.appDetails.currentValue,
  //     changes.appDetails.previousValue
  //   )
  // ) {
  //   this.generalInfoForm.patchValue({ ...this.appDetails });

  // if (this.disabled) {
  //   this.generalInfoForm.disable();
  // }
  // }
  // }
}

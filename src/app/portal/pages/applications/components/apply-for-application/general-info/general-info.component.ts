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
@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss'],
})
export class GeneralInfoComponent implements OnInit, OnChanges {
  @Input() appDetails: any;
  @Input() disabled!: boolean;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  generalInfoForm!: FormGroup;

  constructor(private fb: RxFormBuilder) {
    this.generalInfoForm = this.fb.formGroup(
      NewProgramModel,
      new NewProgramModel()
    );
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.appDetails &&
      !_.isEqual(
        changes.appDetails.currentValue,
        changes.appDetails.previousValue
      )
    ) {
      this.generalInfoForm.patchValue({ ...this.appDetails });

      if (this.disabled) {
        this.generalInfoForm.disable();
      }
    }
  }
}

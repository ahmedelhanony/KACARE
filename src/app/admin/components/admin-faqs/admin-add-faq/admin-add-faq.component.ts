import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { NewFAQModel } from 'src/app/core/models/faq/new-faq-model';
import { FORMLABELS, TABLELISTACTIONS } from 'src/app/Shared/utils/enums';

@Component({
  selector: 'app-admin-add-faq',
  templateUrl: './admin-add-faq.component.html',
  styleUrls: ['./admin-add-faq.component.scss'],
})
export class AdminAddFaqComponent implements OnInit, AfterViewInit {
  faqsForm!: FormGroup;
  public get FAQSFORMLABELS(): typeof FORMLABELS {
    return FORMLABELS;
  }

  public get TABLELISTACTIONS(): typeof TABLELISTACTIONS {
    return TABLELISTACTIONS;
  }

  actionType!: string;
  onSubmit: any = {};

  constructor(
    private fb: RxFormBuilder,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {
    if (data && data.action) {
      this.actionType = data.action;
    }
  }

  ngOnInit(): void {
    this.faqsForm = this.fb.formGroup(NewFAQModel, new NewFAQModel());

    if (this.data && this.data.faqItem && this.data.faqItem.id) {
      this.faqsForm.patchValue({ ...this.data.faqItem });
    }
  }

  ngAfterViewInit(): void {
    this.faqsForm.valueChanges.subscribe((formValues: any) => {
      if (formValues) {
        this.onSubmit = {
          confirmed: true,
          formValues,
        };
      }
    });
  }
}

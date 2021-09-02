import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { NewArticleModel } from 'src/app/core/models/news/new-article-model';
import { FORMLABELS, TABLELISTACTIONS } from 'src/app/Shared/utils/enums';

@Component({
  selector: 'app-admin-add-article',
  templateUrl: './admin-add-article.component.html',
  styleUrls: ['./admin-add-article.component.scss'],
})
export class AdminAddArticleComponent implements OnInit {
  newsForm!: FormGroup;
  public get NEWSFORMLABELS(): typeof FORMLABELS {
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
    this.newsForm = this.fb.formGroup(NewArticleModel, new NewArticleModel());

    if (this.data && this.data.newsItem && this.data.newsItem.id) {
      this.newsForm.patchValue({ ...this.data.newsItem });
    }
  }

  ngAfterViewInit(): void {
    this.newsForm.valueChanges.subscribe((formValues: any) => {
      if (formValues) {
        this.onSubmit = {
          confirmed: true,
          formValues,
        };
      }
    });
  }
}

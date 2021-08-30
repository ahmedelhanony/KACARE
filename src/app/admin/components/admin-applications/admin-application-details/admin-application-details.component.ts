import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FeedbackModel } from 'src/app/core/models/program/feedback-model';
import { DialogService } from 'src/app/core/services/dialog-service/dialog.service';
import { ProgramsService } from 'src/app/core/services/program.service';
import { SharedDataService } from 'src/app/core/services/sharedData.service';
import {
  APPCONTROLTYPE,
  ApplicationsStructures,
} from 'src/app/Shared/utils/applications-data';
import { DefaultConfirmationOptions } from 'src/app/Shared/utils/dialog-options';
import { APPLICATION } from 'src/app/Shared/utils/enums';

@Component({
  selector: 'app-admin-application-details',
  templateUrl: './admin-application-details.component.html',
  styleUrls: ['./admin-application-details.component.scss'],
})
export class AdminApplicationDetailsComponent implements OnInit {
  applicationData: any = [];
  columns = [
    'name',
    'institutionName',
    'memberRole',
    'qualifications',
    'pastExperience',
  ];
  columnsConfig = [
    {
      label: 'Member',
      type: 'text',
    },
    {
      label: 'Institution Name',
      type: 'text',
    },
    {
      label: 'Role',
      type: 'text',
    },
    {
      label: 'Key Qualifications',
      type: 'text',
    },
    {
      label: 'Experience Years',
      type: 'text',
    },
  ];
  teamMembers = [];
  appDetails: any;
  selectedAppID!: number;
  appName!: any;
  appNames = [
    'Proof-Of-Concept',
    'Product-Development',
    'Feasibility-Studies',
    'Demonstration-Projects',
  ];

  public get CONTROLTYPE(): typeof APPCONTROLTYPE {
    return APPCONTROLTYPE;
  }

  feedBackForm!: FormGroup;

  constructor(
    private router: Router,
    private programsService: ProgramsService,
    private dialogService: DialogService,
    private sharedDataService: SharedDataService,
    private fb: RxFormBuilder,
    public dialogRef: MatDialogRef<AdminApplicationDetailsComponent>,
    @Inject(MAT_DIALOG_DATA)
    public appData: any
  ) {
    this.feedBackForm = this.fb.formGroup(FeedbackModel, new FeedbackModel());

    if (appData && appData.id) {
      this.selectedAppID = appData.id;
    }
  }

  ngOnInit(): void {
    if (this.selectedAppID) {
      this.getAppDetails();
    }
  }

  getAppDetails() {
    this.appName = this.router.url
      .substring(this.router.url.lastIndexOf('/') + 1)
      .split('?')[0];

    if (this.appName && this.appNames.includes(this.appName)) {
      this.applicationData = ApplicationsStructures[this.appName];

      this.programsService.setProgServiceName(APPLICATION[this.appName]);

      this.programsService.getProgram(this.appData.id).subscribe((res: any) => {
        if (res && !res.status) {
          this.appDetails = { ...res.result };
       
          this.feedBackForm = this.fb.formGroup(FeedbackModel, this.appDetails);

          this.teamMembers = this.appDetails.teamMembers;
        }
      });
    } else {
      this.router.navigate([this.router.url]);
    }
  }

  onSubmitApp() {
    let model = {
      ...this.feedBackForm.value,
      id: this.selectedAppID,
    };
    this.programsService.submitFeedback(model).subscribe((res: any) => {
      if (res && !res.status) {
        this.afterSubmitting();
      }
    });
  }

  onSaveDraft() {
    let model = {
      ...this.feedBackForm.value,
      id: this.selectedAppID,
    };
    this.programsService.saveFeedback(model).subscribe((res: any) => {
      if (res && !res.status) {
        this.afterSubmitting();
      }
    });
  }

  afterSubmitting() {
    this.dialogRef.close();

    this.dialogService.open(
      DefaultConfirmationOptions({
        message: 'Your feedback has been submitted successfully.',
      })
    );

    setTimeout(() => {
      this.dialogService.closeDialog();
    }, 5000);

    this.sharedDataService.refreshAdminApps();
  }
}

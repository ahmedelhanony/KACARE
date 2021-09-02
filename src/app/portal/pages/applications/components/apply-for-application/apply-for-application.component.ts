import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NAVIGATIONS, SERVICES } from 'src/app/Shared/utils/enums';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FormGroup } from '@angular/forms';
import { NewPOCModel } from 'src/app/core/models/program/poc/new-poc-model';
import { NewDemoModel } from 'src/app/core/models/program/demo/new-demo-model';
import { NewFeasModel } from 'src/app/core/models/program/feas/new-feas-model';
import { NewPdevelopmentModel } from 'src/app/core/models/program/Pdevelopment/new-pdevelopment-model';
import { TeamMember } from 'src/app/core/models/program/team-member';
import { ToastrService } from 'ngx-toastr';
import { ProgramsService } from 'src/app/core/services/program.service';
import { noop } from 'lodash';
import { SharedDataService } from 'src/app/core/services/sharedData.service';
import { APPLICATIONSFORMLABELS } from 'src/app/Shared/utils/applications-data';
import { ConfirmationPopupComponent } from 'src/app/Shared/confirmation-popup/confirmation-popup.component';
@Component({
  selector: 'app-apply-for-application',
  templateUrl: './apply-for-application.component.html',
  styleUrls: ['./apply-for-application.component.scss'],
})
export class ApplyForApplicationComponent implements OnInit {
  appName!: string;
  appNames = [
    'Proof-Of-Concept',
    'Product-Development',
    'Feasibility-Studies',
    'Demonstration-Projects',
  ];
  applicationForm!: FormGroup;
  programModel!: any;
  selectedAppId!: any;
  appDetails!: any;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private programsService: ProgramsService,
    private fb: RxFormBuilder,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    this.appName = this.route.snapshot.paramMap.get('name') || '';
    this.selectedAppId = this.route.snapshot.paramMap.get('id') || '';

    if (this.appName && this.appNames.includes(this.appName)) {
      this.buildForm();
    } else {
      this.goToPreviousPage();
    }
  }

  buildForm() {
    switch (this.appName) {
      case 'Proof-Of-Concept':
        this.programModel = NewPOCModel;

        // this.applicationForm = this.fb.formGroup(
        //   NewPOCModel,
        //   this.appDetails ?? new NewPOCModel()
        // );

        this.programsService.setProgServiceName(SERVICES.POC);
        break;

      case 'Product-Development':
        // const PD = new NewPdevelopmentModel();
        // PD.teamMembers = new Array<TeamMember>();
        // this.applicationForm = this.fb.formGroup(
        //   NewPdevelopmentModel,
        //   this.appDetails ?? PD
        // );

        this.programModel = NewPdevelopmentModel;

        this.programsService.setProgServiceName(SERVICES.Pdevelopment);
        break;

      case 'Feasibility-Studies':
        // this.applicationForm = this.fb.formGroup(
        //   NewFeasModel,
        //   this.appDetails ?? new NewFeasModel()
        // );

        this.programModel = NewFeasModel;

        this.programsService.setProgServiceName(SERVICES.Feas);
        break;

      case 'Demonstration-Projects':
        // const DEMO = new NewDemoModel();
        // DEMO.teamMembers = new Array<TeamMember>();
        // this.applicationForm = this.fb.formGroup(
        //   NewDemoModel,
        //   this.appDetails ?? DEMO
        // );

        this.programModel = NewDemoModel;

        this.programsService.setProgServiceName(SERVICES.Demo);
        break;
    }

    this.fillData();
    if (+this.selectedAppId) {
      this.getAppDetails();
    }
  }

  fillData() {
    const program = new this.programModel();
    program.teamMembers = new Array<TeamMember>();
    this.applicationForm = this.fb.formGroup(
      this.programModel,
      this.appDetails ?? program
    );
  }

  getAppDetails() {
    this.programsService.getProgram(+this.selectedAppId).subscribe(
      (resp: any) => {
        if (resp.status === 1) {
          this.toastr.error('App not found!');
          this.goToPreviousPage();
        }

        this.appDetails = resp.result;
        this.fillData();
      },
      () => {
        this.router.navigate([NAVIGATIONS.ApplicationsPage]);
      }
    );
  }

  onSaveApp() {
    this.applicationForm.patchValue({ isSubmitted: true });
    this.validateForm(this.applicationForm);

    if (this.applicationForm.invalid) {
      this.printInvalidProps(this.applicationForm);
      return;
    }
    this.programsService
      .submitProgram(this.applicationForm.value)
      .subscribe((res: any) => {
        if (res && !res.status) {
          this.toastr.success('App is submitted suuccessfully.');
          this.goToPreviousPage();
        }
      });
  }

  onSaveAppDraft() {
    this.applicationForm.patchValue({ isSubmitted: false });
    this.validateForm(this.applicationForm);

    if (this.applicationForm.invalid) {
      this.printInvalidProps(this.applicationForm);
      return;
    }
    if (this.selectedAppId) {
      this.programsService
        .updateProgram(this.applicationForm.value)
        .subscribe((res: any) => {
          // this.toastr.success('Application is edited.');
          this.done();
        });
    } else {
      this.programsService
        .addProgram(this.applicationForm.value)
        .subscribe((res: any) => {
          // this.toastr.success('Application is saved.');
          this.done();
        });
    }

    this.goToPreviousPage();
  }

  validateForm(form: FormGroup) {
    Object.keys(form.controls).forEach((key) => {
      form.controls[key].updateValueAndValidity();
    });
  }

  printInvalidProps(form: FormGroup) {
    let errorMsg = '';
    Object.keys(form.controls).forEach((key: string) => {
      if (form.controls[key].invalid) {
        errorMsg += `You missed the following:  \n`;
      }
      // APPLICATIONSFORMLABELS[key];
    });
    this.toastr.error(errorMsg);
  }

  goToPreviousPage() {
    this.sharedDataService.setMySubmittedAppsTabIndex();
    history.length > 2 ? history.back() : noop();
  }

  scroll() {
    window.scrollTo({
      top: 100,
      behavior: 'auto',
    });
  }

  done(): void {
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      width: '700px',
      panelClass: ['confirm-popup', 'main-popup'],
      data: {
        title: 'Congratulations!',
        message: 'Your application has been submitted',
        confirmText: '',
        moreText: 'Your Information will be reviewed with our team',
        type: 'done',
        icon: 'done',
      },
    });

    // dialogRef.afterClosed().subscribe(() => {
    //   // closed
    // });
  }
}

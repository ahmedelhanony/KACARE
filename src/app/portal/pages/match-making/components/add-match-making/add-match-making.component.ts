import { Component, Inject, OnInit } from '@angular/core';
import { ConfirmationPopupComponent } from '../../../../../Shared/confirmation-popup/confirmation-popup.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import {
  FORMLABELS,
  SERVICES,
  TABLELISTACTIONS,
} from 'src/app/Shared/utils/enums';
import { date, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { NewMatchMakingModel } from 'src/app/core/models/matchmaking/new-match-making';
import { LookupService } from 'src/app/core/services/lookup.service';
import { forkJoin } from 'rxjs';
import { MatchMakingService } from 'src/app/core/services/matchmaking.service';

@Component({
  selector: 'app-add-match-making',
  templateUrl: './add-match-making.component.html',
  styleUrls: ['./add-match-making.component.scss'],
})
export class AddMatchMakingComponent implements OnInit {
  matchMakingForm!: FormGroup;
  public get FORMLABELS(): typeof FORMLABELS {
    return FORMLABELS;
  }
  technologies: any = [];
  ProjectRoles: any = [];

  public get ACTIONS(): typeof TABLELISTACTIONS {
    return TABLELISTACTIONS;
  }
  actionType!: string;
  showSpinner = false;
  showButtonSpinner = false;

  constructor(
    private lookupService: LookupService,
    private matchMakingService: MatchMakingService,
    public dialog: MatDialog,
    private fb: RxFormBuilder,
    public dialogRef: MatDialogRef<AddMatchMakingComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {
    if (data && data.action) {
      this.actionType = data.action;
    }
  }

  ngOnInit(): void {
    this.matchMakingForm = this.fb.formGroup(
      NewMatchMakingModel,
      new NewMatchMakingModel()
    );

    this.getLookupsData();
    if (
      this.data &&
      this.data.selectedMatcMaking &&
      this.data.selectedMatcMaking.id
    ) {
      this.matchMakingForm.patchValue({ ...this.data.selectedMatcMaking });
    }
  }

  getLookupsData() {
    this.showSpinner = true;

    forkJoin({
      Technologies: this.lookupService.getAll(SERVICES.Technology),
      ProjectRoles: this.lookupService.getAll(SERVICES.ProjectRole),
    }).subscribe(
      ({ Technologies, ProjectRoles }) => {
        this.technologies = Technologies;
        this.ProjectRoles = ProjectRoles;
        this.showSpinner = false;
      },
      () => (this.showSpinner = false)
    );
  }

  onSaveMatchMaking() {
    this.actionType === this.ACTIONS.ADD
      ? this.addMatchMaking()
      : this.editMatchMaking();
  }

  addMatchMaking() {
    this.showButtonSpinner = true;
    this.matchMakingService
      .createMatchMaking({
        ...this.matchMakingForm.value,
      })
      .subscribe(
        (res: any) => {
          if (res && !res.status) {
            this.afterMatchMakingSaved();
          }

          this.showButtonSpinner = false;
        },
        () => {
          this.showButtonSpinner = false;
        }
      );
  }

  editMatchMaking() {
    this.showButtonSpinner = true;
    this.matchMakingService
      .editMatchMaking({
        ...this.matchMakingForm.value,
      })
      .subscribe(
        (res: any) => {
          if (res && !res.status) {
            this.afterMatchMakingSaved();
          }

          this.showButtonSpinner = false;
        },
        () => {
          this.showButtonSpinner = false;
        }
      );
  }

  afterMatchMakingSaved() {
    this.dialogRef.close(true);
    this.showConfirmation();
  }

  showConfirmation(): void {
    this.dialog.open(ConfirmationPopupComponent, {
      width: '750px',
      panelClass: ['confirm-popup', 'main-popup'],
      data: {
        title: 'Almost done!',
        message: `${
          this.actionType === this.ACTIONS.ADD
            ? 'Your match making has been submitted Your Information will be reviewed with our team before publishing'
            : 'Your match making has been edited Your Information will be reviewed by our team before publishing'
        }  `,
        confirmText: '',
        moreText: '',
        type: 'done',
        icon: 'verify',
      },
    });
  }
}

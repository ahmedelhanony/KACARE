import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'src/app/core/services/dialog-service/dialog.service';
import { FAQService } from 'src/app/core/services/faq.service';
import { LoadingService } from 'src/app/core/services/loading/loading.service';
import { DefaultDeletionOptions } from 'src/app/Shared/utils/dialog-options';
import { TABLELISTACTIONS } from 'src/app/Shared/utils/enums';
import { AdminAddFaqComponent } from './admin-add-faq/admin-add-faq.component';

@Component({
  selector: 'app-admin-faqs',
  templateUrl: './admin-faqs.component.html',
  styleUrls: ['./admin-faqs.component.scss'],
})
export class AdminFaqsComponent implements OnInit {
  columns = ['question', 'answer', 'visible', 'actions'];
  columnsConfig = [
    {
      label: 'Question',
      type: 'text',
    },
    {
      label: 'Answer',
      type: 'text',
    },
    {
      label: 'Published',
      type: 'toggle',
    },
    {
      label: 'Actions',
      type: 'action',
    },
  ];
  dataSource: any = [];
  actions: any = ['edit', 'delete'];

  status: any = [
    { value: null, viewValue: 'All' },
    { value: 1, viewValue: 'Published' },
    { value: 0, viewValue: 'UnPublished' },
  ];
  statusFilter: any = null;

  selectedFAQId!: number;
  loading$ = this.loader.loading$;

  constructor(
    public dialog: MatDialog,
    private FAQService: FAQService,
    private dialogService: DialogService,
    public loader: LoadingService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllFAQS();
  }

  getAllFAQS() {
    let query: any = {
      pageNumber: 1,
      pageSize: 30,
      visible: this.statusFilter,
    };

    this.FAQService.getQuestions(query).subscribe((response: any) => {
      if (response && response.body && response.body.length) {
        this.dataSource = [...response.body];
      } else {
        this.dataSource = [];
      }
    });
  }

  onStatusChanged({ value }: any) {
    this.statusFilter = value;
    this.getAllFAQS();
  }

  //#region Receving Data From Child Component

  onReceiveFAQItem({ item, action }: any) {
    switch (action) {
      case TABLELISTACTIONS.DELETE:
        this.onDeleteFAQ(item);
        break;

      case TABLELISTACTIONS.EDIT:
        this.selectedFAQId = item.id;
        this.onEditFAQ(item, TABLELISTACTIONS.EDIT);
        break;
    }
  }

  //#endregion

  //#region Add FAQ Functions

  addFaq(): void {
    const dialogRef = this.dialog.open(AdminAddFaqComponent, {
      width: '750px',
      data: { action: TABLELISTACTIONS.ADD },
      panelClass: ['main-popup'],
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res && res.confirmed) {
        this.addNewQuestion(res.formValues);
      }
    });
  }

  addNewQuestion(formValues: any) {
    this.FAQService.addQuestion(formValues).subscribe((response: any) => {
      this.handleDataAfterActionDone(response, TABLELISTACTIONS.ADD);
    });
  }

  //#endregion

  //#region Add / Update FAQ Actions

  onEditFAQ(faqItem: any, action: TABLELISTACTIONS): void {
    const dialogRef = this.dialog.open(AdminAddFaqComponent, {
      width: '750px',
      data: { faqItem, action },
      panelClass: ['main-popup'],
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res && res.confirmed) {
        this.editFAQ(res.formValues);
      }
    });
  }

  editFAQ(formValues: any) {
    formValues.id = this.selectedFAQId;
    this.FAQService.editQuestion(formValues).subscribe((res: any) => {
      this.handleDataAfterActionDone(res, TABLELISTACTIONS.EDIT);
    });
  }

  //#endregion

  //#region Delete FAQ Functions

  onDeleteFAQ(item: any) {
    if (item && item.id) {
      this.dialogService.open(
        DefaultDeletionOptions({
          title: 'Delete FAQ Question!',
          icon: 'delete-question',
        })
      );

      this.dialogService.confirmed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.deleteFAQ(item.id);
        }
      });
    }
  }

  deleteFAQ(id: number) {
    this.FAQService.deleteQuestion(id).subscribe((response: any) => {
      this.handleDataAfterActionDone(response, TABLELISTACTIONS.DELETE);
    });
  }

  //#endregion

  handleDataAfterActionDone(response: any, action: TABLELISTACTIONS) {
    if (response && !response.status) {
      this.toaster.success(
        `Question is ${
          action === TABLELISTACTIONS.ADD
            ? 'added'
            : action === TABLELISTACTIONS.EDIT
            ? 'updated'
            : 'deleted'
        } successfully.`
      ,'Success');
      this.getAllFAQS();
    }
  }
}

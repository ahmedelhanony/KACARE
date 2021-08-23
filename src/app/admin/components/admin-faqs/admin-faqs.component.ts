import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from 'src/app/core/services/dialog-service/dialog.service';
import { FAQService } from 'src/app/core/services/faq.service';
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
  selectedFAQId!: number;
  showSpinner = false;

  constructor(
    public dialog: MatDialog,
    private FAQService: FAQService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.getAllFAQS();
  }

  getAllFAQS() {
    this.showSpinner = true;
    const query: any = {
      pageNumber: 1,
      pageSize: 50,
    };

    this.FAQService.getQuestions(query).subscribe(
      (response: any) => {
        if (response && response.body && response.body.length) {
          this.dataSource = [...response.body];
        } else {
          this.dataSource = [];
        }

        this.showSpinner = false;
      },
      () => {
        this.showSpinner = false;
      }
    );
  }

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
    this.showSpinner = true;
    this.FAQService.addQuestion(formValues).subscribe(
      (response: any) => {
        this.handleDataAfterActionDone(response);
      },
      () => (this.showSpinner = false)
    );
  }

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
    this.showSpinner = true;
    formValues.id = this.selectedFAQId;
    this.FAQService.editQuestion(formValues).subscribe(
      (res: any) => {
        this.handleDataAfterActionDone(res);
      },
      () => (this.showSpinner = false)
    );
  }

  //#region

  //#region Delete FAQ Functions

  onDeleteFAQ(item: any) {
    if (item && item.id) {
      this.dialogService.open(
        DefaultDeletionOptions({ title: 'Delete FAQ Question!' })
      );

      this.dialogService.confirmed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.deleteFAQ(item.id);
        }
      });
    }
  }

  deleteFAQ(id: number) {
    this.showSpinner = true;
    this.FAQService.deleteQuestion(id).subscribe(
      (response: any) => {
        this.handleDataAfterActionDone(response);
      },
      () => (this.showSpinner = false)
    );
  }

  //#endregion

  handleDataAfterActionDone(response: any) {
    if (response && !response.status) {
      this.getAllFAQS();
    } else {
      this.showSpinner = false;
    }
  }
}

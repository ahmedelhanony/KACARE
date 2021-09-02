import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewsModel } from 'src/app/core/models/news/news.model';
import { DialogService } from 'src/app/core/services/dialog-service/dialog.service';
import { LoadingService } from 'src/app/core/services/loading/loading.service';
import { NewsService } from 'src/app/core/services/news.service';
import { DefaultDeletionOptions } from 'src/app/Shared/utils/dialog-options';
import { TABLELISTACTIONS } from 'src/app/Shared/utils/enums';
import { AdminAddArticleComponent } from './admin-add-article/admin-add-article.component';

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.scss'],
})
export class AdminNewsComponent implements OnInit {
  columns = ['imageSrc', 'title', 'body', 'publishDate', 'actions'];
  columnsConfig = [
    {
      label: 'Image',
      type: 'image',
    },
    {
      label: 'Title',
      type: 'link',
    },
    {
      label: 'Body',
      type: 'details',
    },
    {
      label: 'Publish',
      type: 'toggle',
    },
    {
      label: 'Action',
      type: 'action',
    },
  ];
  actions: any = ['edit', 'delete'];
  news = new Array<NewsModel>();

  status: any = [
    { value: null, viewValue: 'All' },
    { value: 1, viewValue: 'Published' },
    { value: 0, viewValue: 'UnPublished' },
  ];
  statusFilter: any = null;

  selectedNewsId!: number;
  loading$ = this.loader.loading$;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    public loader: LoadingService,
    private dialogService: DialogService,
    private newsService: NewsService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.news = this.route.snapshot.data.news.body;
    this.convertNewsImages();
  }

  onStatusChanged({ value }: any) {
    this.statusFilter = value;
    this.getAllNews();
  }

  getAllNews() {
    let query: any = {
      pageNumber: 1,
      pageSize: 30,
      visible: this.statusFilter,
    };

    this.newsService.getNews(query).subscribe((response: any) => {
      if (response && response.body && response.body.length) {
        this.news = [...response.body];
        this.convertNewsImages();
      } else {
        this.news = [];
      }
    });
  }

  convertNewsImages() {
    this.news.map((news: NewsModel) => {
      news.imageSrc = `data:image/jpeg;base64,${news.image.data}`;
    });
  }

  //#region Receving Data From Child Component

  onReceiveFAQItem({ item, action }: any) {
    switch (action) {
      case TABLELISTACTIONS.DELETE:
        this.onDeleteNews(item);
        break;

      case TABLELISTACTIONS.EDIT:
        this.selectedNewsId = item.id;
        this.onEditNews(item, TABLELISTACTIONS.EDIT);
        break;
    }
  }

  //#endregion

  //#region Add FAQ Functions

  saveNews(): void {
    const dialogRef = this.dialog.open(AdminAddArticleComponent, {
      width: '750px',
      data: { action: TABLELISTACTIONS.ADD },
      panelClass: ['main-popup'],
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res && res.confirmed) {
        this.addNews(res.formValues);
      }
    });
  }

  addNews(formValues: any) {
    this.newsService.addNews(formValues).subscribe((response: any) => {
      this.handleDataAfterActionDone(response, TABLELISTACTIONS.ADD);
    });
  }

  //#endregion

  //#region Add / Update News Actions

  onEditNews(newsItem: any, action: TABLELISTACTIONS): void {
    const dialogRef = this.dialog.open(AdminAddArticleComponent, {
      width: '750px',
      data: { newsItem, action },
      panelClass: ['main-popup'],
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res && res.confirmed) {
        this.editNews(res.formValues);
      }
    });
  }

  editNews(formValues: any) {
    formValues.id = this.selectedNewsId;
    this.newsService.editNews(formValues).subscribe((res: any) => {
      this.handleDataAfterActionDone(res, TABLELISTACTIONS.EDIT);
    });
  }

  //#endregion

  //#region Delete FAQ Functions

  onDeleteNews(item: any) {
    if (item && item.id) {
      this.dialogService.open(
        DefaultDeletionOptions({ title: 'Delete News!' })
      );

      this.dialogService.confirmed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.deleteNews(item.id);
        }
      });
    }
  }

  deleteNews(id: number) {
    this.newsService.deleteNews(id).subscribe((response: any) => {
      this.handleDataAfterActionDone(response, TABLELISTACTIONS.DELETE);
    });
  }

  //#endregion

  handleDataAfterActionDone(response: any, action: TABLELISTACTIONS) {
    if (response && !response.status) {
      this.toaster.success(
        `Article is ${
          action === TABLELISTACTIONS.ADD
            ? 'added'
            : action === TABLELISTACTIONS.EDIT
            ? 'updated'
            : 'deleted'
        } successfully.`,
        'Success'
      );
      this.getAllNews();
    }
  }
}

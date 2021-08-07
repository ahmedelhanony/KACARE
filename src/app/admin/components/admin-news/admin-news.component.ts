import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AdminAddArticleComponent} from "./admin-add-article/admin-add-article.component";

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.scss']
})
export class AdminNewsComponent implements OnInit {
  columns = ['Image', 'Title', 'Body', 'Publish', 'actions'];
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
      type: 'details'
    },
    {
      label: 'Publish',
      type: 'toggle'
    },
    {
      label: 'Action',
      type: 'action'
    },

  ];
  dataSource = [
    {
      Image: 'assets/images/news/news-1.jpg',
      Title: 'My Demonstration Project One',
      Body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      Publish: true,
      actions: ['edit', 'delete']
    },
    {
      Image: 'assets/images/news/news-1.jpg',
      Title: 'My Demonstration Project One',
      Body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      Publish: false,
      actions: ['edit', 'delete']
    },
    {
      Image: 'assets/images/news/news-1.jpg',
      Title: 'My Demonstration Project One',
      Body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      Publish: true,
      actions: ['edit', 'delete']
    },
  ];
  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  addArticle(): void {
    const dialogRef = this.dialog.open(AdminAddArticleComponent, {
      width: '750px',
      panelClass: ['main-popup'],
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });

  }
}

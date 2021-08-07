import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AdminAddFaqComponent} from "./admin-add-faq/admin-add-faq.component";

@Component({
  selector: 'app-admin-faqs',
  templateUrl: './admin-faqs.component.html',
  styleUrls: ['./admin-faqs.component.scss']
})
export class AdminFaqsComponent implements OnInit {
  columns = ['Question', 'Answer', 'Publish', 'actions'];
  columnsConfig = [
    {
      label: 'Question',
      type: 'text',
    },
    {
      label: 'Answer',
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
      Question: 'My Demonstration Project One',
      Answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      Publish: true,
      actions: ['edit', 'delete']
    },
    {
      Question: 'My Demonstration Project One',
      Answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      Publish: false,
      actions: ['edit', 'delete']
    },
    {
      Question: 'My Demonstration Project One',
      Answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      Publish: true,
      actions: ['edit', 'delete']
    },
  ];
  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  addFaq(): void {
    const dialogRef = this.dialog.open(AdminAddFaqComponent, {
      width: '750px',
      panelClass: ['main-popup'],
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });

  }

}

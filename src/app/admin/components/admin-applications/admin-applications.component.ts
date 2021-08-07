import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-applications',
  templateUrl: './admin-applications.component.html',
  styleUrls: ['./admin-applications.component.scss']
})
export class AdminApplicationsComponent implements OnInit {
  columns = ['title', 'REPTopic', 'SubmissionDate', 'Status'];
  columnsConfig = [
    {
      label: 'Title',
      type: 'popup',
      popupType: 'application'
    },
    {
      label: 'REP Topic',
      type: 'text'
    },
    {
      label: 'Submission Date',
      type: 'text'
    },
    {
      label: 'Status',
      type: 'status'
    },
  ];
  dataSource = [
    {
      title: 'My Demonstration Project One',
      REPTopic: 'Green Hydrogen',
      SubmissionDate: '23 Feb 2021',
      Status: {
        label: 'Summitted',
        type: 'waiting'
      }
    },
    {
      title: 'My Demonstration Project One',
      REPTopic: 'Green Hydrogen',
      SubmissionDate: '23 Feb 2021',
      Status: {
        label: 'Reviewed',
        type: 'approved'
      }
    },
    {
      title: 'My Demonstration Project One',
      REPTopic: 'Green Hydrogen',
      SubmissionDate: '23 Feb 2021',
      Status: {
        label: 'Draft',
        type: 'draft'
      }
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

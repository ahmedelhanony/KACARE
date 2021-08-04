import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submission-applications',
  templateUrl: './submission-applications.component.html',
  styleUrls: ['./submission-applications.component.scss']
})
export class SubmissionApplicationsComponent implements OnInit {
  columns = ['title', 'REPTopic', 'SubmissionDate', 'Status'];
  columnsConfig = [
    {
      label: 'Title',
      type: 'link'
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

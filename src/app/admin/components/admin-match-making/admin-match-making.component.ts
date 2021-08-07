import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-match-making',
  templateUrl: './admin-match-making.component.html',
  styleUrls: ['./admin-match-making.component.scss']
})
export class AdminMatchMakingComponent implements OnInit {
  columns = ['organizationName', 'Technology', 'Details', 'contactInfo', 'actions'];
  columnsConfig = [
    {
      label: 'Organization Name',
      type: 'text'
    },
    {
      label: 'Technology',
      type: 'text'
    },
    {
      label: 'Details',
      type: 'details'
    },
    {
      label: 'contactInfo',
      type: 'text'
    },
    {
      label: 'Action',
      type: 'action'
    },
  ];
  dataSource = [
    {
      organizationName: 'Organization Name One',
      Technology: 'Green Hydrogen',
      Details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
      contactInfo: 'Email@company,com',
      status: 'publish',
      actions: ['publish']
    },
    {
      organizationName: 'Organization Name One',
      Technology: 'Green Hydrogen',
      Details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
      contactInfo: 'Email@company,com',
      status: 'publish',
      actions: ['publish']
    },
    {
      organizationName: 'Organization Name One',
      Technology: 'Green Hydrogen',
      Details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
      contactInfo: 'Email@company,com',
      status: 'published',
      actions: ['publish']
    },
    {
      organizationName: 'Organization Name One',
      Technology: 'Green Hydrogen',
      Details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
      contactInfo: 'Email@company,com',
      status: 'published',
      actions: ['publish']
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

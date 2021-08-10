import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss'],
})
export class TutorialsComponent implements OnInit {
  columns = ['name', 'lastModified', 'actions'];
  columnsConfig = [
    {
      label: 'File Name',
      type: 'file',
    },
    {
      label: 'Last Modified',
      type: 'text',
    },
    {
      label: 'Action',
      type: 'action',
    },
  ];
  dataSource = [
    {
      name: 'Proof Of concept webinar Presentation',
      lastModified: '1 Jun 2020',

      actions: ['download'],
    },
    {
      name: 'Proof Of concept webinar Presentation',
      lastModified: '1 Jun 2020',

      actions: ['download'],
    },
    {
      name: 'Proof Of concept webinar Presentation',
      lastModified: '1 Jun 2020',

      actions: ['download'],
    },
    {
      name: 'Proof Of concept webinar Presentation',
      lastModified: '1 Jun 2020',

      actions: ['download'],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

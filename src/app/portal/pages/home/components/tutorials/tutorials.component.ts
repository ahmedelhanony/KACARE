import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {
  columns = ['name', 'lastModified', 'size', 'actions'];
  columnsConfig = [
    {
      label: 'File Name',
      type: 'file'
    },
    {
      label: 'Last Modified',
      type: 'text'
    },
    {
      label: 'Size',
      type: 'text'
    },
    {
      label: 'Action',
      type: 'action'
    },
  ];
  dataSource = [
    {
      name: 'Proof Of concept webinar Presentation',
      lastModified: '23 Feb 2021',
      size: '23 MB',
      actions: ['download']
    },
    {
      name: 'Proof Of concept webinar Presentation',
      lastModified: '23 Feb 2021',
      size: '23 MB',
      actions: ['download']
    },
    {
      name: 'Proof Of concept webinar Presentation',
      lastModified: '23 Feb 2021',
      size: '23 MB',
      actions: ['download']
    },
    {
      name: 'Proof Of concept webinar Presentation',
      lastModified: '23 Feb 2021',
      size: '23 MB',
      actions: ['download']
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

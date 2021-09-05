import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorials-table',
  templateUrl: './tutorials-table.component.html',
  styleUrls: ['./tutorials-table.component.scss'],
})
export class TutorialsTableComponent {
  columns = ['name', 'actions'];
  columnsConfig = [
    {
      label: 'File Name',
      type: 'file',
    },
    {
      label: 'Action',
      type: 'action',
    },
  ];
  dataSource = [
    {
      name: 'Proof of Concept Webinar Presentation',
      link: 'https://www.kacare.gov.sa/ar/tut/Proof%20of%20Concept%20Webinar%20Presentation.pptx',
    },
    {
      name: 'Product Development Webinar Presentation',
      link: 'https://www.kacare.gov.sa/ar/tut/Product%20Development%20Webinar%20Presentation.pptx',
    },
    {
      name: 'Feasibility Studies Webinar Presentation',
      link: 'https://www.kacare.gov.sa/ar/tut/Feasibility%20Studies%20Webinar%20Presentation.pptx',
    },
    {
      name: 'Demonstration Webinar Presentation',
      link: 'https://www.kacare.gov.sa/ar/tut/Demonstration%20Webinar%20Presentation.pptx',
    },
  ];
  actions: any = ['download'];
}

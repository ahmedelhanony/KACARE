import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  applications = [
    {
      title: 'PROOF OF CONCEPT',
      description: 'Supporting Prototype development and testing for new technology',
      image: '1',
      link: '/applications/application-details/Demonstration-Projects',
    },
    {
      title: 'PRODUCT DEVELOPMENT',
      description: 'Supporting businesses to develop commercial Products that meet local Saudi market needs',
      image: '2',
      link: '/applications/application-details/Demonstration-Projects',
    },
    {
      title: 'FEASIBILITY STUDIES',
      description: 'Supporting business plan development',
      image: '3',
      link: '/applications/application-details/Demonstration-Projects',
    },
    {
      title: 'DEMONSTRATION PROJECTS',
      description: 'Our demonstration project program supports  technology implementation  ',
      image: '4',
      link: '/applications/application-details/Demonstration-Projects',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

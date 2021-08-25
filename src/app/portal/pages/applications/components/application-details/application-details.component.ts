import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationsData } from 'src/app/Shared/utils/applications-data';
import { NAVIGATIONS } from 'src/app/Shared/utils/enums';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss'],
})
export class ApplicationDetailsComponent implements OnInit {
  appDetails!: AppDetails;
  appName!: string;
  appNames = [
    'Proof-Of-Concept',
    'Product-Development',
    'Feasibility-Studies',
    'Demonstration-Projects',
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((data: any) => {
      debugger;
      this.appName = data.params.id;
      if (this.appName && this.appNames.includes(this.appName)) {
        this.appDetails = ApplicationsData[this.appName];
      } else {
        this.router.navigate([NAVIGATIONS.homePage]);
      }
    });
  }
}

export interface AppDetails {
  title: string;
  subTitle: string;
  description: string;
  image: string;
  detailsList: any[];
}

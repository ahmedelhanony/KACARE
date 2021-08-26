import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProgramsService } from 'src/app/core/services/program.service';
import { APPLICATION } from 'src/app/Shared/utils/enums';

@Component({
  selector: 'app-admin-application-details',
  templateUrl: './admin-application-details.component.html',
  styleUrls: ['./admin-application-details.component.scss'],
})
export class AdminApplicationDetailsComponent implements OnInit {
  data = [
    {
      title: 'Business Case',
      details: [
        {
          label: 'Business Strategy ',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        },
        {
          label: 'Business Strategy ',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        },
      ],
    },
    {
      title: 'Business Case',
      details: [
        {
          label: 'Business Strategy ',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        },
        {
          label: 'Business Strategy ',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        },
      ],
    },
  ];

  columns = [
    'Member',
    'InstitutionName ',
    'Role',
    'KeyQualifications',
    'ExperienceYears',
  ];
  columnsConfig = [
    {
      label: 'Member',
      type: 'text',
    },
    {
      label: 'Institution Name',
      type: 'text',
    },
    {
      label: 'Role',
      type: 'text',
    },
    {
      label: 'Key Qualifications',
      type: 'text',
    },
    {
      label: 'Experience Years',
      type: 'text',
    },
  ];
  dataSource = [
    {
      Member: 'Name',
      InstitutionName: 'Green Hydrogen',
      Role: 'Role',
      KeyQualifications: 'Key Qualifications',
      ExperienceYears: 'Experience Years',
    },
    {
      Member: 'My Demonstration Project One',
      InstitutionName: 'Institution name ',
      Role: 'Role',
      KeyQualifications: 'Key Qualifications',
      ExperienceYears: 'Experience Years',
    },
  ];

  appDetails: any;

  selectedAppID!: number;
  appName!: any;
  appNames = [
    'Proof-Of-Concept',
    'Product-Development',
    'Feasibility-Studies',
    'Demonstration-Projects',
  ];

  constructor(
    private router: Router,
    private programsService: ProgramsService,
    public dialogRef: MatDialogRef<AdminApplicationDetailsComponent>,
    @Inject(MAT_DIALOG_DATA)
    public appData: any
  ) {
    if (appData && appData.id) {
      this.selectedAppID = appData.id;
    }
  }

  ngOnInit(): void {
    if (this.selectedAppID) {
      this.getAppDetails();
    }
  }

  getAppDetails() {
    debugger;
    this.appName = this.router.url
      .substring(this.router.url.lastIndexOf('/') + 1)
      .split('?')[0];

    if (this.appName && this.appNames.includes(this.appName)) {
      this.programsService.setProgServiceName(APPLICATION[this.appName]);

      this.programsService.getProgram(this.appData.id).subscribe((res: any) => {
        debugger;
        if (res && !res.status) {
          this.appDetails = { ...res.result };
        }
      });
    } else {
      this.router.navigate([this.router.url]);
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-application-details',
  templateUrl: './admin-application-details.component.html',
  styleUrls: ['./admin-application-details.component.scss']
})
export class AdminApplicationDetailsComponent implements OnInit {

  data = [
    {
      title: 'Business Case',
      details: [
        {
          label: 'Business Strategy ',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s'
        },
        {
          label: 'Business Strategy ',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s'
        },
      ]
    },
    {
      title: 'Business Case',
      details: [
        {
          label: 'Business Strategy ',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s'
        },
        {
          label: 'Business Strategy ',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s'
        },
      ]
    }
  ]


  columns = ['Member', 'InstitutionName ', 'Role', 'KeyQualifications', 'ExperienceYears'];
  columnsConfig = [
    {
      label: 'Member',
      type: 'text'
    },
    {
      label: 'Institution Name',
      type: 'text'
    },
    {
      label: 'Role',
      type: 'text'
    },
    {
      label: 'Key Qualifications',
      type: 'text'
    },
    {
      label: 'Experience Years',
      type: 'text'
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

  constructor() { }

  ngOnInit(): void {
  }

}

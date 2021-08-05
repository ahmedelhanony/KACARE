import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strategy-teams',
  templateUrl: './strategy-teams.component.html',
  styleUrls: ['./strategy-teams.component.scss']
})
export class StrategyTeamsComponent implements OnInit {
  columns = ['Member', 'InstitutionName ', 'Role', 'KeyQualifications', 'ExperienceYears', 'actions'];
  columnsConfig = [
    {
      label: 'Member',
      type: 'input'
    },
    {
      label: 'Institution Name',
      type: 'input'
    },
    {
      label: 'Role',
      type: 'input'
    },
    {
      label: 'KeyQualifications',
      type: 'input'
    },
    {
      label: 'Experience Years',
      type: 'input'
    },
    {
      label: '',
      type: 'action'
    },
  ];
  dataSource = [
    {
      Member: 'Name',
      InstitutionName: 'Green Hydrogen',
      Role: 'Role',
      KeyQualifications: 'Key Qualifications',
      ExperienceYears: 'Experience Years',
      actions: ['delete']
    },
    {
      Member: 'My Demonstration Project One',
      InstitutionName: 'Institution name ',
      Role: 'Role',
      KeyQualifications: 'Key Qualifications',
      ExperienceYears: 'Experience Years',
      actions: ['delete']
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

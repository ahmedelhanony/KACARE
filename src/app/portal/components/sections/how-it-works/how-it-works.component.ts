import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {
  workSteps = [
    {
      title: 'Create Account',
      description: 'Create your company account',
      icon: 'create-account'
    },
    {
      title: 'Make a new matching ',
      description: 'Click on make an new matching and submit form',
      icon: 'new-matching'
    },
    {
      title: 'Approval',
      description: 'Information will be reviewed with our team',
      icon: 'approval'
    },
    {
      title: 'Start Matching',
      description: 'With more than 2k connected companies and 50+ Projects.',
      icon: 'start-matching'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

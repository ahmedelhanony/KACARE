import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  goals = [
    {
      title: 'Introducing',
      description: 'Introducing Technologies to the Kingdom',
      icon: 'introducing'
    },
    {
      title: 'Finding',
      description: 'Finding mechanisms to create a Sustainable Supply of Emerging Technologies',
      icon: 'finding'
    },
    {
      title: 'Enabling',
      description: 'Enabling the Private Sector to Commercialize Renewable Energy Technologies',
      icon: 'enabling'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

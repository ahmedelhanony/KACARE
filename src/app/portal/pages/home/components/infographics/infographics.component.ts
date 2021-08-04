import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infographics',
  templateUrl: './infographics.component.html',
  styleUrls: ['./infographics.component.scss']
})
export class InfographicsComponent implements OnInit {
  infographics = [
    {
      title: 'Solar Thermal Applications',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ',
      fileLink: '#'
    },
    {
      title: 'Solar Thermal Applications',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ',
      fileLink: '#'
    },
    {
      title: 'Solar Thermal Applications',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ',
      fileLink: '#'
    },
    {
      title: 'Solar Thermal Applications',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ',
      fileLink: '#'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

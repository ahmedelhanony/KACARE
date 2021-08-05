import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-match-making',
  templateUrl: './all-match-making.component.html',
  styleUrls: ['./all-match-making.component.scss']
})
export class AllMatchMakingComponent implements OnInit {
  companies = [
    {
      name: 'Organization Name',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      email: 'Email@companyname.com.sa',
      technology: 'Solar Cooling',
      role:'Off Takers'
    },
    {
      name: 'Organization Name',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      email: 'Email@companyname.com.sa',
      technology: 'Solar Cooling',
      role:'Off Takers'
    },
    {
      name: 'Organization Name',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      email: 'Email@companyname.com.sa',
      technology: 'Solar Cooling',
      role:'Off Takers'
    },
    {
      name: 'Organization Name',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      email: 'Email@companyname.com.sa',
      technology: 'Solar Cooling',
      role:'Off Takers'
    },
    {
      name: 'Organization Name',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      email: 'Email@companyname.com.sa',
      technology: 'Solar Cooling',
      role:'Off Takers'
    },
    {
      name: 'Organization Name',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      email: 'Email@companyname.com.sa',
      technology: 'Solar Cooling',
      role:'Off Takers'
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}

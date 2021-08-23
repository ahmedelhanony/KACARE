import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-making-details',
  templateUrl: './match-making-details.component.html',
  styleUrls: ['./match-making-details.component.scss'],
})
export class MatchMakingDetailsComponent implements OnInit {
  companyDetails = [
    {
      label: 'Email',
      info: 'username@company.com.sa',
    },
    {
      label: 'Job Title',
      info: 'User Experience Designer  ',
    },
    {
      label: 'Phone Number',
      info: 'User Experience Designer  ',
    },
    {
      label: 'Registration Role ',
      info: 'Business Developer ',
    },
    {
      label: 'Organization Field of experience  ',
      info:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus  Ipsum.\n" +
        '\n',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
  }
}

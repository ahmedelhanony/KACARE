import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-match-making',
  templateUrl: './default-match-making.component.html',
  styleUrls: ['./default-match-making.component.scss']
})
export class DefaultMatchMakingComponent implements OnInit {
  description = 'The demonstration projects request for proposals (RFP) provides financial support for \n' +
    'selected bidders to conduct full-scale demonstrations of commercially ready renewable \n' +
    'energy technologies in the Kingdom of Saudi Arabia. Eligible bidders Kingdom of \n' +
    'Saudi Arabia. Eligible bidders must submit proposals detailing the technology that they \n' +
    'seek to commercialize, along with a business plan describing their approach for \n' +
    'ensuring successful operation of the business, after the completion of the \n' +
    'demonstration project. Bidders that receive funding through this RFP will be expected \n' +
    'to work with an off-taker in KSA, to implement their technology at the off-taker site. \n' +
    'Bidders that successfully complete demonstration projects under this RFP are expected \n' +
    'to enact their business plans, and continue to pursue commercialization of the \n' +
    'proposed renewable energy technology, here in the KSA.';

  image = '/assets/images/applications/application-details.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { getTechnologyAreas } from '../../utils/constants';

@Component({
  selector: 'app-shared-technolog-areas-card',
  templateUrl: './technolog-areas-card.component.html',
  styleUrls: ['./technolog-areas-card.component.scss'],
})
export class TechnologAreasCardComponent implements OnInit {
  @Input() cardsNumbers: any;
  infographics: any = [];

  constructor() {}

  ngOnInit(): void {
    this.infographics = this.cardsNumbers
      ? getTechnologyAreas().splice(0, this.cardsNumbers)
      : getTechnologyAreas();
  }

  onDownLoadFile(fileLink: string) {
    window.open(fileLink,'_blank');
  }
}

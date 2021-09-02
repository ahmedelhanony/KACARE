import { Component, Input, OnInit } from '@angular/core';
import { getFirstChar } from 'src/app/Shared/utils/utils';

@Component({
  selector: 'app-match-making-card',
  templateUrl: './match-making-card.component.html',
  styleUrls: ['./match-making-card.component.scss'],
})
export class MatchMakingCardComponent implements OnInit {
  @Input() className!: string;
  @Input() name!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() email!: string;
  @Input() technology!: string;
  @Input() role!: string;

  constructor() {}

  ngOnInit(): void {}

  truncateName(text: string) {
    getFirstChar(text);
  }
}

import { Component, Input, OnInit } from '@angular/core';

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

  getFirstChar(text: string) {
    if (text) {
      let characters = text.match(/\b(\w)/g);
      if (characters) {
        return characters.join('');
      } else {
        return '';
      }
    } else {
      return '';
    }
  }
}

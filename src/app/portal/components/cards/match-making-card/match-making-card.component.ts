import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-match-making-card',
  templateUrl: './match-making-card.component.html',
  styleUrls: ['./match-making-card.component.scss']
})
export class MatchMakingCardComponent implements OnInit {
  @Input() className = ''
  @Input() name = '';
  @Input() title = '';
  @Input() description = '';
  @Input() email = 'Email@companyname.com.sa';
  @Input() technology = '';
  @Input() role = ''

  constructor() { }

  ngOnInit(): void {
  }

  getFirstChar(text: string){
    let characters = text.match(/\b(\w)/g);
    if(characters) {
      return characters.join('');
    }else {
      return false
    }
  }

}

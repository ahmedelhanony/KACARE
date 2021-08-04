import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnInit {
  @Input() className = '';
  @Input() iconType = '';
  @Input() iconName = '';
  @Input() title = '';
  @Input() description = '';
  constructor() { }

  ngOnInit(): void {
  }

}

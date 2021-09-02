import { Component, Input, OnInit } from '@angular/core';
import { getFirstChar } from '../../utils/utils';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
})
export class SectionTitleComponent implements OnInit {
  @Input() title: any = '';
  @Input() subTitle = '';
  @Input() orgEmail = '';
  @Input() className = '';
  constructor() {}

  ngOnInit(): void {}

  truncateName(text: string) {
    getFirstChar(text);
  }
}

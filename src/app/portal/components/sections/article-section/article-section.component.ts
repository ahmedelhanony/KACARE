import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-section',
  templateUrl: './article-section.component.html',
  styleUrls: ['./article-section.component.scss']
})
export class ArticleSectionComponent implements OnInit {
  @Input() className = '';
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';
  constructor() { }

  ngOnInit(): void {
  }

}

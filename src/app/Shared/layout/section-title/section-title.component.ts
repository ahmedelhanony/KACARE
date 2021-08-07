import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit {
  @Input() title = '';
  @Input() subTitle = '';
  @Input() orgEmail = '';
  @Input() className = '';
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

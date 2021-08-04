import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() className = '';
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';
  @Input() technology = '';
  @Input() location = '';
  @Input() date = '';
  @Input() id = '';
  constructor() { }

  ngOnInit(): void {
  }

}

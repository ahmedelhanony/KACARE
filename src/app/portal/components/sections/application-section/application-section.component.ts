import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-application-section',
  templateUrl: './application-section.component.html',
  styleUrls: ['./application-section.component.scss']
})
export class ApplicationSectionComponent implements OnInit {
  @Input() applications: any;
  constructor() { }

  ngOnInit(): void {
  }

}

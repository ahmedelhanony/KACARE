import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ApplicationQuizComponent} from "../../../pages/applications/components/application-quiz/application-quiz.component";

@Component({
  selector: 'app-application-section',
  templateUrl: './application-section.component.html',
  styleUrls: ['./application-section.component.scss']
})
export class ApplicationSectionComponent implements OnInit {
  @Input() applications: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  takeQuiz(): void {
    const dialogRef = this.dialog.open(ApplicationQuizComponent, {
      panelClass: ['main-popup', 'full-popup'],
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}

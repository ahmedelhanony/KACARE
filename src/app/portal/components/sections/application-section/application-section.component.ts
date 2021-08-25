import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/core/services/profile.service';
import { NAVIGATIONS } from 'src/app/Shared/utils/enums';
import { ApplicationQuizComponent } from '../../../pages/applications/components/application-quiz/application-quiz.component';

@Component({
  selector: 'app-application-section',
  templateUrl: './application-section.component.html',
  styleUrls: ['./application-section.component.scss'],
})
export class ApplicationSectionComponent implements OnInit {
  @Input() applications: any;
  constructor(
    public dialog: MatDialog,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onApplyClicked(applicationURL: string) {
    if (!this.profileService._currentUser.isAuthenticated) {
      this.router.navigate([NAVIGATIONS.loginPageUrl]);
    }else{
      this.router.navigate([applicationURL]);
    }
  }

  takeQuiz(): void {
    const dialogRef = this.dialog.open(ApplicationQuizComponent, {
      panelClass: ['main-popup', 'full-popup'],
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}

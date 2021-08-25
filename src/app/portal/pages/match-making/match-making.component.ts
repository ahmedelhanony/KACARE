import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/core/services/profile.service';
import { SharedDataService } from 'src/app/core/services/sharedData.service';
import { TABLELISTACTIONS } from 'src/app/Shared/utils/enums';
import { AddMatchMakingComponent } from './components/add-match-making/add-match-making.component';

@Component({
  selector: 'app-match-making',
  templateUrl: './match-making.component.html',
  styleUrls: ['./match-making.component.scss'],
})
export class MatchMakingComponent implements OnInit {
  isRegistered = true;

  constructor(
    public dialog: MatDialog,
    private sharedDataService: SharedDataService,
    private router: Router,
    private profileService: ProfileService
  ) {}

  matchMakingTabs = [
    { name: 'All Match Making', link: '/match-making/all-match-making' },
  ];

  ngOnInit(): void {
    if (this.profileService.currentUser.isUserOnly) {
      this.matchMakingTabs.push({
        name: 'My Match Making',
        link: '/match-making/my-match-making',
      });
    }
  }

  showAddButton(): boolean {
    return this.router.url.includes('my-match-making');
  }

  Add(): void {
    const dialogRef = this.dialog.open(AddMatchMakingComponent, {
      width: '750px',
      panelClass: 'main-popup',
      data: { action: TABLELISTACTIONS.ADD },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.sharedDataService.refreshMatchMaking();
      }
    });
  }
}

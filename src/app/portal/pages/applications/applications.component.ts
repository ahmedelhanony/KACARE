import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/core/services/profile.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  isAuthenticated! :boolean;
  isUserOnly !:boolean;
  constructor(private profileService  : ProfileService) { }

  ngOnInit(): void {
    this.isAuthenticated =  this.profileService.currentUser.isAuthenticated;
    this.isUserOnly =  this.profileService.currentUser.isUserOnly;
  }

}

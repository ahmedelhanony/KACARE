import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/core/services/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  profileDetails: any = {};

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileDetails = this.profileService.currentUser;
  }
}

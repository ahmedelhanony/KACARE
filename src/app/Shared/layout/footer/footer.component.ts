import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/core/services/profile.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  isAuthenticated = false;
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.isAuthenticated = this.profileService.currentUser.isAuthenticated;
  }
}

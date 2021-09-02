import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FiltersService } from 'src/app/core/services/filters/filters.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { SharedDataService } from 'src/app/core/services/sharedData.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit, AfterViewInit, OnDestroy {
  isAuthenticated!: boolean;
  isUserOnly!: boolean;
  tabIndex = 0;

  subs: Subscription = new Subscription();

  constructor(
    private profileService: ProfileService,
    private sharedDataService: SharedDataService,
    private filtersService: FiltersService
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.profileService.currentUser.isAuthenticated;
    this.isUserOnly = this.profileService.currentUser.isUserOnly;
  }

  ngAfterViewInit(): void {
    const params: any = this.filtersService.getParams();
    if (params.appId || params.rfpTopicId) {
      this.tabIndex = 1;
    }

    this.subs.add(
      this.sharedDataService.isMySubmittedAppsTab$.subscribe(
        (isMyAppsTab: boolean) => {
          if (isMyAppsTab) {
            this.tabIndex = isMyAppsTab ? 1 : 0;
          }
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

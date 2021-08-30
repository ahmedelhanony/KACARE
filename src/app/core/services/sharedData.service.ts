import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedDataService {
  public hideOrShowFiltersSubject = new BehaviorSubject<any>(null);
  public hideOrShowFilters$ = this.hideOrShowFiltersSubject.asObservable();

  public isMatchMakingAddedSubject = new BehaviorSubject<any>(null);
  public isMatchMakingAdded$ = this.isMatchMakingAddedSubject.asObservable();

  public isAppFeedbackSubmitedSubject = new BehaviorSubject<any>(null);
  public isAppFeedbackSubmited$ = this.isAppFeedbackSubmitedSubject.asObservable();

  public lsitingBaseRefreshDataSubject = new BehaviorSubject<boolean>(false);
  public lsitingBaseRefreshData$ =
    this.lsitingBaseRefreshDataSubject.asObservable();

  serviceData: any;

  constructor(private router: Router) {}

  goBack(url: string) {
    if (history.length > 2) {
      history.back();
      return;
    }
    this.router.navigate([url]);
  }

  refreshMatchMaking() {
    this.isMatchMakingAddedSubject.next(true);
    this.isMatchMakingAddedSubject.next(false);
  }

  refreshAdminApps() {
    this.isAppFeedbackSubmitedSubject.next(true);
    this.isAppFeedbackSubmitedSubject.next(false);
  }

  refreshGridData() {
    this.lsitingBaseRefreshDataSubject.next(true);
    this.lsitingBaseRefreshDataSubject.next(false);
  }
}

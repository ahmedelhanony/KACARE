import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedDataService {
  public isMatchMakingAddedSubject = new BehaviorSubject<any>(null);
  public isMatchMakingAdded$ = this.isMatchMakingAddedSubject.asObservable();

  public isAppFeedbackSubmitedSubject = new BehaviorSubject<any>(null);
  public isAppFeedbackSubmited$ =
    this.isAppFeedbackSubmitedSubject.asObservable();

  public isMySubmittedAppsTabSubject = new BehaviorSubject<boolean>(false);
  public isMySubmittedAppsTab$ =
    this.isMySubmittedAppsTabSubject.asObservable();

  public isUserLoggedOutSubject = new BehaviorSubject<boolean>(false);
  public isUserLoggedOut$ = this.isUserLoggedOutSubject.asObservable();

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

  setMySubmittedAppsTabIndex() {
    this.isMySubmittedAppsTabSubject.next(true);
    this.isMySubmittedAppsTabSubject.next(false);
  }

  logUserOut() {
    this.isUserLoggedOutSubject.next(true);
    this.isUserLoggedOutSubject.next(false);
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedDataService {
  public hideOrShowFiltersSubject = new BehaviorSubject<any>(null);
  public hideOrShowFilters$ = this.hideOrShowFiltersSubject.asObservable();

  public isFiltersChangedSubject = new BehaviorSubject<any>(null);
  public isFiltersChanged$ = this.isFiltersChangedSubject.asObservable();

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

  refreshGridData() {
    this.lsitingBaseRefreshDataSubject.next(true);
    this.lsitingBaseRefreshDataSubject.next(false);
  }
}

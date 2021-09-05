import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import {
  filters,
  FiltersService,
  SearchOptions,
} from 'src/app/core/services/filters/filters.service';
import { MatchMakingService } from 'src/app/core/services/matchmaking.service';

@Component({
  selector: 'app-all-match-making',
  templateUrl: './all-match-making.component.html',
  styleUrls: ['./all-match-making.component.scss'],
})
export class AllMatchMakingComponent implements OnInit, OnDestroy {
  companies: any = [];
  showSpinner = false;
  filters!: filters;
  searchOptions!: SearchOptions;
  dropDownIds = ['visible', 'technologyId', 'matchMakingRoleId'];
  destoryed$: Subject<any> = new Subject<any>();

  constructor(
    private router: Router,
    private filtersService: FiltersService,
    private matchMakingService: MatchMakingService
  ) {}

  ngOnInit(): void {
    this.showSpinner = true;
    this.onParamsChanges();

    this.router.events.pipe(takeUntil(this.destoryed$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.onParamsChanges();
      }
    });
  }

  onParamsChanges() {
    this.showSpinner = true;
    const params: any = this.filtersService.getParams();
    this.filters = this.filtersService.getDropdownFilters(params);
    this.searchOptions = this.filtersService.getSearchOptions(params);

    Object.keys(params).forEach((key: any) => {
      if (this.dropDownIds.includes(key) && params[key]) {
        params[key] = +params[key];
      }
    });

    this.fetchData(params);
  }

  fetchData(params: object = {}) {
    this.showSpinner = true;

    this.matchMakingService
      .getMatchMakings(params)
      .pipe(
        finalize(() => {
          this.showSpinner = false;
        })
      )
      .subscribe((response: any) => {
        if (response && response.body && response.body.length) {
          this.companies = [...response.body];
        } else {
          this.companies = [];
        }
      });
  }

  onFilterChanges(selectedFilters: any) {
    this.filters = { ...selectedFilters };
    this.changeRouterParams();
  }

  onSearchChanged(searchValue: string) {
    this.searchOptions.searchFilter = searchValue;
    this.changeRouterParams();
  }

  changeRouterParams() {
    this.filtersService.changeParams(
      this.filters,
      '/match-making/all-match-making',
      this.searchOptions
    );
  }

  ngOnDestroy(): void {
    this.destoryed$.next(true);
    this.destoryed$.complete();
  }
}

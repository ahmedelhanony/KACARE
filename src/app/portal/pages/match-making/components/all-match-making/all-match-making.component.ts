import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { filters, FiltersService } from 'src/app/core/services/filters/filters.service';
import { MatchMakingService } from 'src/app/core/services/matchmaking.service';

@Component({
  selector: 'app-all-match-making',
  templateUrl: './all-match-making.component.html',
  styleUrls: ['./all-match-making.component.scss'],
})
export class AllMatchMakingComponent implements OnInit , OnDestroy {
  companies:any = [
    // {
    //   name: 'Organization Name',
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    //   email: 'Email@companyname.com.sa',
    //   technology: 'Solar Cooling',
    //   role: 'Off Takers',
    // },
    // {
    //   name: 'Organization Name',
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    //   email: 'Email@companyname.com.sa',
    //   technology: 'Solar Cooling',
    //   role: 'Off Takers',
    // },
    // {
    //   name: 'Organization Name',
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    //   email: 'Email@companyname.com.sa',
    //   technology: 'Solar Cooling',
    //   role: 'Off Takers',
    // },
    // {
    //   name: 'Organization Name',
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    //   email: 'Email@companyname.com.sa',
    //   technology: 'Solar Cooling',
    //   role: 'Off Takers',
    // },
    // {
    //   name: 'Organization Name',
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    //   email: 'Email@companyname.com.sa',
    //   technology: 'Solar Cooling',
    //   role: 'Off Takers',
    // },
    // {
    //   name: 'Organization Name',
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    //   email: 'Email@companyname.com.sa',
    //   technology: 'Solar Cooling',
    //   role: 'Off Takers',
    // },
  ];
  showSpinner = false;
  filters!: filters;
  dropDownIds = ['visible', 'technologyId', 'matchMakingRoleId'];
  destoryed$: Subject<any> = new Subject<any>();

  constructor(private router : Router,private filtersService: FiltersService , private matchMakingService: MatchMakingService) {}

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

  changeRouterParams() {
    this.filtersService.changeParams(this.filters, '/match-making/all-match-making');
  }
  
  ngOnDestroy(): void {
    this.destoryed$.next(true);
    this.destoryed$.complete();
  }
}

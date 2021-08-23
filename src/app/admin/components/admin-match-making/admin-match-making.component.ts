import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import {
  filters,
  FiltersService,
} from 'src/app/core/services/filters/filters.service';
import { MatchMakingService } from 'src/app/core/services/matchmaking.service';
import { BaseComponent } from 'src/app/Shared/components/base/base.component';

@Component({
  selector: 'app-admin-match-making',
  templateUrl: './admin-match-making.component.html',
  styleUrls: ['./admin-match-making.component.scss'],
})
export class AdminMatchMakingComponent
  extends BaseComponent
  implements OnInit, OnDestroy
{
  columns = [
    'organizationName',
    'technology',
    'matchMakingRole',
    'details',
    'contactInfo',
  ];
  columnsConfig = [
    {
      label: 'Organization Name',
      type: 'text',
    },
    {
      label: 'Technology',
      type: 'object',
    },
    {
      label: 'Role',
      type: 'object',
    },
    {
      label: 'Details',
      type: 'text',
    },
    {
      label: 'Contact Info',
      type: 'text',
    },
  ];
  dataSource: any = [
    // {
    //   organizationName: 'Organization Name One',
    //   Technology: 'Green Hydrogen',
    //   Details:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    //   contactInfo: 'Email@company,com',
    //   status: 'publish',
    //   actions: ['publish'],
    // },
    // {
    //   organizationName: 'Organization Name One',
    //   Technology: 'Green Hydrogen',
    //   Details:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    //   contactInfo: 'Email@company,com',
    //   status: 'publish',
    //   actions: ['publish'],
    // },
    // {
    //   organizationName: 'Organization Name One',
    //   Technology: 'Green Hydrogen',
    //   Details:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    //   contactInfo: 'Email@company,com',
    //   status: 'published',
    //   actions: ['publish'],
    // },
    // {
    //   organizationName: 'Organization Name One',
    //   Technology: 'Green Hydrogen',
    //   Details:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    //   contactInfo: 'Email@company,com',
    //   status: 'published',
    //   actions: ['publish'],
    // },
  ];
  actions: any = ['publish'];
  showSpinner = false;
  filters!: filters;
  dropDownIds = ['visible', 'technologyId', 'matchMakingRoleId']
  destoryed$: Subject<any> = new Subject<any>();
  subscriptions: Subscription = new Subscription();

  constructor(
    private matchMakingService: MatchMakingService,
    private toastrService: ToastrService,
    private filtersService: FiltersService,
    public injector: Injector
  ) {
    super(injector);
    super.ngOnInit();

    if (this.isAdmin) {
      this.columns.push('actions');
      this.columnsConfig.push({
        label: 'Action',
        type: 'action',
      });
    }
  }

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
    // this.searchOptions = this.filtersService.getSearchOptions(params);
    // this.sortOptions = this.filtersService.getSortOptions(params);
    // this.gridModel.state.skip = this.filtersService.getSkipForGridModel(params);
    // this.gridModel.state.take = this.filtersService.getPerPage(params);
    // if (params && params['visible']) {
    //   params['visible'] = +params['visible'];
    // }

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
          this.dataSource = [...response.body];
        } else {
          this.dataSource = [];
        }
      });
  }

  onFilterChanges(selectedFilters: any) {
    this.filters = { ...selectedFilters };
    this.changeRouterParams();
  }

  changeRouterParams() {
    this.filtersService.changeParams(this.filters, '/admin/match-making');
  }

  onReceiveStatus(data: any) {
    this.showSpinner = true;
    this.toggleMatchMakingStatus(data.item);
  }

  toggleMatchMakingStatus(item: any) {
    this.showSpinner = true;

    if (item.visible) {
      this.matchMakingService
        .disapproveMatchMaking(item.id)
        .subscribe((res: any) => {
          this.afterStatusChanged(false);
        });
    } else {
      this.matchMakingService
        .approveMatchMaking(item.id)
        .subscribe((res: any) => {
          this.afterStatusChanged(true);
        });
    }

    this.showSpinner = true;
  }

  afterStatusChanged(approved: boolean) {
    this.onParamsChanges();

    this.toastrService.success(
      `Match making ${approved ? 'published' : 'unpublished'} successfully`,
      'Success'
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.destoryed$.next(true);
    this.destoryed$.complete();
  }
}

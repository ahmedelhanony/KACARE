import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppFiltersModel } from 'src/app/core/models/common/app-filters.model';
import {
  AppFilters,
  FiltersService,
} from 'src/app/core/services/filters/filters.service';
import { LoadingService } from 'src/app/core/services/loading/loading.service';
import { LookupService } from 'src/app/core/services/lookup.service';
import { ProgramsService } from 'src/app/core/services/program.service';
import { APPLICATION, NAVIGATIONS, SERVICES } from 'src/app/Shared/utils/enums';
import * as _ from 'lodash';
import { ApplicationsData } from 'src/app/Shared/utils/applications-data';
import { SharedDataService } from 'src/app/core/services/sharedData.service';

@Component({
  selector: 'app-admin-applications',
  templateUrl: './admin-applications.component.html',
  styleUrls: ['./admin-applications.component.scss'],
})
export class AdminApplicationsComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  columns = ['title', 'rfpTopic', 'creationDate', 'Status'];
  columnsConfig = [
    {
      label: 'Title',
      type: 'popup',
      popupType: 'application',
    },
    {
      label: 'RFP Topic',
      type: 'object',
    },
    {
      label: 'Submission Date',
      type: 'date',
    },
    {
      label: 'Status',
      type: 'status',
    },
  ];
  dataSource: any = [];

  appName!: any;
  appNames = [
    'Proof-Of-Concept',
    'Product-Development',
    'Feasibility-Studies',
    'Demonstration-Projects',
  ];

  filtersForm!: FormGroup;
  filters: AppFilters = new AppFilters();
  dropDownIds = ['rfpTopicId'];
  // This is global So if one day you to increase the boolean filters
  booleanFilters = ['reviewed'];

  applicationsSatatus: any = [
    {
      key: true,
      description: 'Reviewed',
    },
    {
      key: false,
      description: 'Submitted',
    },
  ];
  RFPTopics: any = [];

  title!: string;

  destoryed$: Subject<any> = new Subject<any>();
  loading$ = this.loader.loading$;
  subs: Subscription = new Subscription();

  constructor(
    private lookupService: LookupService,
    private filtersService: FiltersService,
    private programsService: ProgramsService,
    private loader: LoadingService,
    private sharedDataService: SharedDataService,
    private fb: RxFormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.filtersForm = this.fb.formGroup(
      AppFiltersModel,
      new AppFiltersModel()
    );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data: any) => {
      this.appName = data.params.id;
      if (this.appName && this.appNames.includes(this.appName)) {
        this.getAppName();
        this.buildAppDetailsPage();
      } else {
        this.router.navigate([NAVIGATIONS.ApplicationsPage]);
      }
    });
  }

  ngAfterViewInit(): void {
    this.subs.add(
      this.sharedDataService.isAppFeedbackSubmited$.subscribe(
        (confirmed: boolean) => {
          if (confirmed) {
            this.onParamsChanges();
          }
        }
      )
    );
  }

  getAppName() {
    this.title = ApplicationsData[this.appName].title;
  }

  buildAppDetailsPage(): void {
    this.programsService.setProgServiceName(APPLICATION[this.appName]);

    this.getRFPTopics();

    this.onParamsChanges();

    this.router.events.pipe(takeUntil(this.destoryed$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.onParamsChanges();
      }
    });
  }

  getRFPTopics() {
    this.lookupService.getAll(SERVICES.RFPTopic).subscribe((res: any) => {
      if (res && res.length) {
        this.RFPTopics = [...res];
      }
    });
  }

  onParamsChanges() {
    // Params used to fetch data from BE
    const params: any = this.filtersService.getParams();
    Object.keys(params).forEach((key: any) => {
      // To check if dropdown fiels.
      if (this.dropDownIds.includes(key) && params[key]) {
        params[key] = +params[key];
      }

      // to check if boolean fiels.
      else if (this.booleanFilters.includes(key) && params[key]) {
        params[key] = params[key] === 'true' ? true : false;
      }
    });

    this.filters = this.filtersService.getDropdownAppFilters(params);

    let selectedFilters: any = _.cloneDeep(this.filters);

    if (selectedFilters) {
      // To check if date field.
      if (selectedFilters.dateFrom) {
        selectedFilters.dateFrom = new Date(selectedFilters.dateFrom);
      }

      if (selectedFilters.dateTo) {
        selectedFilters.dateTo = new Date(selectedFilters.dateTo);
      }

      this.updateFormValues(selectedFilters);
    }

    this.fetchData(params);
  }

  updateFormValues(formValues: any) {
    this.filtersForm.patchValue({ ...formValues });
  }

  fetchData(params: object = {}) {
    this.programsService.getPrograms(params).subscribe((response: any) => {
      if (response && response.body && response.body.length) {
        this.dataSource = [...response.body];
        this.statusMapper();
      } else {
        this.dataSource = [];
      }
    });
  }

  statusMapper() {
    if (this.dataSource && this.dataSource.length) {
      this.dataSource.map((ele: any) => {
        if (ele.isReviewed) {
          ele.Status = {
            label: 'Reviewed',
            type: 'approved',
          };
        } else if (ele.isSubmitted) {
          ele.Status = {
            label: 'Submitted',
            type: 'waiting',
          };
        } else {
          ele.Status = {
            label: 'Draft',
            type: 'draft',
          };
        }
      });
    }
  }

  changeRouterParams() {
    this.filtersService.changeParams(
      this.filters,
      this.router.url.split('?')[0]
    );
  }

  onStatusChanged(value: any) {
    this.filters.reviewed = value;
    this.changeRouterParams();
  }

  onRFPTopicChanged(value: any) {
    this.filters.rfpTopicId = value;
    this.changeRouterParams();
  }

  dateRangeChange(dateRangeFrom: any, dateRangeTo: any) {
    this.filters.dateFrom = dateRangeFrom.value;
    this.filters.dateTo = dateRangeTo.value;
    this.changeRouterParams();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.destoryed$.next(true);
    this.destoryed$.complete();
  }
}

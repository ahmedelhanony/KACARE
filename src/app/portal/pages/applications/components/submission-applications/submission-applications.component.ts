import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppFiltersModel } from 'src/app/core/models/common/app-filters.model';
import {
  AppFilters,
  FiltersService,
} from 'src/app/core/services/filters/filters.service';
import { LookupService } from 'src/app/core/services/lookup.service';
import { ProgramsService } from 'src/app/core/services/program.service';
import { SERVICES } from 'src/app/Shared/utils/enums';
import * as _ from 'lodash';
import { LoadingService } from 'src/app/core/services/loading/loading.service';

@Component({
  selector: 'app-submission-applications',
  templateUrl: './submission-applications.component.html',
  styleUrls: ['./submission-applications.component.scss'],
})
export class SubmissionApplicationsComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  columns = ['title', 'rfpTopic', 'creationDate', 'Status'];
  columnsConfig = [
    {
      label: 'Title',
      type: 'link',
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

  filtersForm!: FormGroup;
  filters: AppFilters = new AppFilters();
  dropDownIds = ['rfpTopicId'];

  applications: any = [
    {
      appId: SERVICES.POC,
      serviceName: SERVICES.POC,
      description: 'Proof Of Concept',
    },
    {
      appId: SERVICES.Pdevelopment,
      serviceName: SERVICES.Pdevelopment,
      description: 'Product Development',
    },
    {
      appId: SERVICES.Feas,
      serviceName: SERVICES.Feas,
      description: 'Feasibility Studies',
    },
    {
      appId: SERVICES.Demo,
      serviceName: SERVICES.Demo,
      description: 'Demonstration Projects',
    },
  ];
  RFPTopics: any = [];

  destoryed$: Subject<any> = new Subject<any>();
  loading$ = this.loader.loading$;
  subs: Subscription = new Subscription();

  constructor(
    private lookupService: LookupService,
    private filtersService: FiltersService,
    private programsService: ProgramsService,
    private loader: LoadingService,
    private fb: RxFormBuilder,
    private router: Router
  ) {
    this.filtersForm = this.fb.formGroup(
      AppFiltersModel,
      new AppFiltersModel()
    );
  }

  ngOnInit(): void {
    this.programsService.setProgServiceName(this.applications[0].serviceName);

    this.getRFPTopics();

    this.onParamsChanges();

    this.router.events.pipe(takeUntil(this.destoryed$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.onParamsChanges();
      }
    });
  }

  ngAfterViewInit(): void {
    const params: any = this.filtersService.getParams();
    if (!params.appId) {
      this.filtersForm.controls['appId'].setValue(SERVICES.POC, {
        onlySelf: true,
      });
    }
  }

  getRFPTopics() {
    this.lookupService.getAll(SERVICES.RFPTopic).subscribe((res: any) => {
      if (res && res.length) {
        this.RFPTopics = [...res];
      }
    });
  }

  onParamsChanges() {
    const params: any = this.filtersService.getParams();
    this.filters = this.filtersService.getDropdownAppFilters(params);
    let selectedFilters: any = _.cloneDeep(this.filters);

    Object.keys(params).forEach((key: any) => {
      if (this.dropDownIds.includes(key) && params[key]) {
        params[key] = +params[key];
      }
    });

    if (selectedFilters) {
      Object.keys(selectedFilters).forEach((key: any) => {
        if (this.dropDownIds.includes(key) && selectedFilters[key]) {
          selectedFilters[key] = +selectedFilters[key];
        }
      });

      this.updateFormValues(selectedFilters);
      if (selectedFilters.appId) {
        this.programsService.setProgServiceName(selectedFilters.appId);
      }
    }

    this.fetchData(params);
  }

  updateFormValues(formValues: any) {
    this.filtersForm.patchValue({ ...formValues });
  }

  fetchData(params: object = {}) {
    this.programsService.getMyPrograms(params).subscribe((response: any) => {
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
    this.filtersService.changeParams(this.filters, '/applications');
  }

  onAppNameChanged(data: any) {
    this.filters.appId = data.value;
    this.programsService.setProgServiceName(data.value);
    this.changeRouterParams();
  }

  onRFPTopicChanged(value: any) {
    this.filters.rfpTopicId = value;
    this.changeRouterParams();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.destoryed$.next(true);
    this.destoryed$.complete();
  }
}

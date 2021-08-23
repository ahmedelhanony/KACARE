import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FiltersModel } from 'src/app/core/models/common/filters.model';
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';
import { filters } from 'src/app/core/services/filters/filters.service';
import { forkJoin } from 'rxjs';
import { LookupService } from 'src/app/core/services/lookup.service';
import { SERVICES } from '../../utils/enums';

@Component({
  selector: 'app-shared-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  providers: [DatePipe],
})
export class FiltersComponent implements OnInit, OnChanges {
  @Input() selectedFilters!: filters;
  @Output() emitFilters = new EventEmitter<FiltersModel>();

  filtersForm!: FormGroup;
  filters: filters = new filters();
  status: any = [
    { value: 1, viewValue: 'Published' },
    { value: 0, viewValue: 'UnPublished' },
  ];
  technologies: any = [];
  ProjectRoles: any = [];
  dropDownIds = ['visible', 'technologyId', 'matchMakingRoleId'];

  constructor(
    private fb: RxFormBuilder,
    private datePipe: DatePipe,
    private lookupService: LookupService
  ) {
    this.filtersForm = this.fb.formGroup(FiltersModel, new FiltersModel());
  }

  ngOnInit() {
    this.getLookupsData();
  }

  getLookupsData() {
    forkJoin({
      Technologies: this.lookupService.getAll(SERVICES.Technology),
      ProjectRoles: this.lookupService.getAll(SERVICES.ProjectRole),
    }).subscribe(({ Technologies, ProjectRoles }) => {
      this.technologies = Technologies;
      this.ProjectRoles = ProjectRoles;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.selectedFilters &&
      !_.isEqual(
        changes.selectedFilters.currentValue,
        changes.selectedFilters.previousValue
      )
    ) {
      this.filters = _.cloneDeep(this.selectedFilters);
      this.updateFormValue(this.selectedFilters);
    }
  }

  updateFormValue(params: any) {
    let clonedFilters: any = _.cloneDeep(params);
    Object.keys(clonedFilters).forEach((key: any) => {
      if (clonedFilters[key] && (key === 'dateFrom' || key === 'dateTo')) {
        clonedFilters[key] = new Date(clonedFilters[key]);
      }

      if (this.dropDownIds.includes(key) && clonedFilters[key]) {
        clonedFilters[key] = +clonedFilters[key];
      }
    });

    this.filtersForm.patchValue({ ...clonedFilters }, { emitEvent: false });
  }

  onStatusChanged(value: any) {
    this.filters.visible = value;
    this.emitFilters.emit({ ...this.filters });
  }

  onTechnologyChanged(value: any) {
    this.filters.technologyId = value;
    this.emitFilters.emit({ ...this.filters });
  }

  onRoleChanged(value: any) {
    this.filters.matchMakingRoleId = value;
    this.emitFilters.emit({ ...this.filters });
  }

  dateRangeChange(dateRangeFrom: any, dateRangeTo: any) {
    this.filters.dateFrom = dateRangeFrom.value;
    this.filters.dateTo = dateRangeTo.value;
    this.emitFilters.emit({ ...this.filters });
  }

  transformDate(clonedFormValues: any, key: string, format: string) {
    return (clonedFormValues[key] = this.datePipe.transform(
      clonedFormValues[key],
      format
    ));
  }
}

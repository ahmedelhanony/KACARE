import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';

@Injectable()
export class FiltersService {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  getParams() {
    const urlParams = this.activatedRoute.snapshot.queryParams;
    return {
      ..._.omitBy(
        urlParams,
        (v) => _.isUndefined(v) || _.isNull(v) || v === ''
      ),
      pageNumber: urlParams['pageNumber'] ? +urlParams['pageNumber'] : 1,
      pageSize: urlParams['pageSize'] ? +urlParams['pageSize'] : 25,
    };
  }

  changeParams(filters: filters | AppFilters, url: string) {
    const page = 1; //gridModel.state.skip > 0 ? gridModel.state.skip / gridModel.state.take : gridModel.state.skip;
    const params = _.omitBy(
      { ...filters },
      (v: any) => v === '' || _.isUndefined(v) || _.isNull(v)
    );
    const queryParams = {
      ...params,
      // pageNumber: page + 1,
      pageNumber: 1,
      pageSize: 10, //gridModel.state.take,
    };
    this.router.navigate([url], {
      queryParams,
    });
  }

  getDropdownFilters(params: any) {
    const dropdownFilters = new filters();
    dropdownFilters.visible = params['visible'] ? params['visible'] : null;
    dropdownFilters.technologyId = params['technologyId']
      ? params['technologyId']
      : null;
    dropdownFilters.matchMakingRoleId = params['matchMakingRoleId']
      ? params['matchMakingRoleId']
      : null;
    dropdownFilters.dateFrom = params['dateFrom'] ? params['dateFrom'] : null;
    dropdownFilters.dateTo = params['dateTo'] ? params['dateTo'] : null;
    return dropdownFilters;
  }

  getDropdownAppFilters(params: any) {
    const dropdownFilters = new AppFilters();
    dropdownFilters.rfpTopicId = params['rfpTopicId']
      ? params['rfpTopicId']
      : null;
    dropdownFilters.appId = params['appId'] ? params['appId'] : null;
    return dropdownFilters;
  }

  getCurrentPage(params: any) {
    return params['pageNumber'] ? +params['pageNumber'] : 1;
  }

  getPerPage(params: any) {
    return params['pageSize'] ? +params['pageSize'] : 25;
  }

  getSkipForGridModel(params: any) {
    return (this.getCurrentPage(params) - 1) * +params['pageSize'];
  }
}

export class filters {
  visible!: boolean;
  technologyId!: number;
  matchMakingRoleId!: number;
  dateFrom!: Date;
  dateTo!: Date;
}

export class AppFilters {
  rfpTopicId!: number;
  appId!: string;
}

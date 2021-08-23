import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { SERVICES } from 'src/app/Shared/utils/enums';
import { LookupService } from '../services/lookup.service';

@Injectable()
export class FilterLookupsResolver implements Resolve<any> {
  constructor(private lookupService: LookupService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return forkJoin({
      Technologies: this.lookupService.getAll(SERVICES.Technology),
      ProjectRoles: this.lookupService.getAll(SERVICES.ProjectRole),
    })
      .pipe(
        map(({ Technologies, ProjectRoles }) => {
        })
      )
      .subscribe((res) => {
      });
  }
}

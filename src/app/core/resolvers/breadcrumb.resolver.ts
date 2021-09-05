import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Injectable()
export class BreadcrumbResolver implements Resolve<any> {
  constructor() {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return route.params['id'];
  }
}

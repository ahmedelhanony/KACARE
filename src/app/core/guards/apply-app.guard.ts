import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { NAVIGATIONS, ROLES } from 'src/app/Shared/utils/enums';
import { ProfileService } from '../services/profile.service';

import('@angular/router');
@Injectable()
export class ApplyAppGuard implements CanActivate {
  constructor(private profileService: ProfileService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.profileService.authorize(ROLES.User)) {
      this.router.navigate([NAVIGATIONS.loginPageUrl]);
      return false;
    }
    return true;
  }
}

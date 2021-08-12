import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NAVIGATIONS, ROLES, SECURITY } from 'src/app/Shared/utils/enums';
import { IUserProfile } from '../models/user/IUserProfile';
import { UtilityService } from './utility.service';

@Injectable()
export class ProfileService {
  _currentUser: IUserProfile = <IUserProfile>{};
  constructor(private utilityService: UtilityService, private router: Router) {}

  setToken(accessToken: string) {
    this._currentUser.accessToken = accessToken;
    this.utilityService.setWithExpiry(
      'usertoken',
      accessToken,
      SECURITY.AccessTokenExpiration
    );
  }

  get currentUser(): IUserProfile {
    this._currentUser = this.utilityService.getWithExpiry('userdata');

    if (!this._currentUser || !this.utilityService.getWithExpiry('usertoken'))
      this._currentUser = <IUserProfile>{};

    return this._currentUser;
  }

  setProfile(data: any) {
    this._currentUser.userId = data.identityKey;
    this._currentUser.email = data.email;
    this._currentUser.roles = data.roles;
    this._currentUser.isAuthenticated = true;
    this._currentUser.fullName = data.fullName;
    this._currentUser.mobileNumber = data.mobileNumber;
    this._currentUser.organizationName = data.organizationName;
    this._currentUser.jobTitle = data.jobTitle;
    this._currentUser.experienceFields = data.experienceFields;
    this._currentUser.generalRole = data.generalRole;

    //User
    this._currentUser.isUserOnly = this.isRoleOf(ROLES.User);

    this._currentUser.isAdminOnly = this.isRoleOf(ROLES.Admin);

    this.utilityService.setWithExpiry(
      'userdata',
      this._currentUser,
      SECURITY.AccessTokenExpiration
    );
  }

  //clear with redirect to login page
  clearProfile() {
    this.utilityService.removeKey('usertoken');
    this.utilityService.removeKey('userdata');
    this._currentUser = <IUserProfile>{};
    this.router.navigate([NAVIGATIONS.loginPageUrl]);
  }

  //clear with no redirect
  clearUserData() {
    this.utilityService.removeKey('usertoken');
    this.utilityService.removeKey('userdata');
    this._currentUser = <IUserProfile>{};
  }

  navigate() {
    this.router.navigate(['/matchmaking/role']);
  }

  authorize(role: any) {
    if (
      !this.currentUser ||
      this.currentUser.roles === undefined ||
      this.currentUser.roles.length === 0
    ) {
      this.router.navigate([NAVIGATIONS.loginPageUrl]);
    }

    var roleitem = this.currentUser.roles.find(
      (x: any) => x == ROLES.Admin || x == role
    );
    if (roleitem) return true;
    else return false;
  }

  authorizeUser() {
    if (
      !this.currentUser ||
      this.currentUser.roles === undefined ||
      this.currentUser.roles.length === 0
    ) {
      this.router.navigate([NAVIGATIONS.loginPageUrl]);
    }

    var roleitem = this.currentUser.roles.find((x: any) => x == ROLES.User);
    if (roleitem) return true;
    else return false;
  }

  isRoleOf(role: any) {
    let hasRole = this._currentUser.roles.find((x: any) => x == role);
    if (hasRole) return true;
    else return false;
  }
}

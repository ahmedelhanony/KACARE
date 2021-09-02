import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { TranslateService } from "@ngx-translate/core";
import { AccountService } from 'src/app/core/services/account.service';
import { BaseService } from 'src/app/core/services/base.service';
import { LookupService } from 'src/app/core/services/lookup.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { UtilityService } from 'src/app/core/services/utility.service';
import { GridTypeEnum, NAVIGATIONS } from '../../utils/enums';
// import { ToastrService } from "ngx-toastr";

export class ServiceLocator {
  static injector: Injector;
}
@Component({
  template: ``,
})
export class BaseComponent implements OnInit {
  public utilityService: UtilityService;
  // public translateService: TranslateService;
  public profileService: ProfileService;
  public router: Router;
  public route: ActivatedRoute;
  public baseService: BaseService;
  // public toastr: ToastrService;
  public accountService: AccountService;
  public lookupService: LookupService;
  public $: any;
  public isUserOnly = false;
  public isAdmin = false;
  public organizationName!: string;

  constructor(public injector: Injector) {
    this.accountService = injector.get(AccountService);
    this.lookupService = injector.get(LookupService);
    this.profileService = injector.get(ProfileService);
    this.utilityService = injector.get(UtilityService);
    // this.translateService = injector.get(TranslateService);
    this.route = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
    //  this.toastr = injector.get(ToastrService);
    this.baseService = injector.get(BaseService);
  }
  get TypeEnum() {
    return GridTypeEnum;
  }

  ngOnInit(): void {
    debugger;
    this.isUserOnly = this.profileService.currentUser.isUserOnly;
    this.isAdmin = this.profileService.currentUser.isAdminOnly;
    this.organizationName = this.profileService.currentUser.organizationName;
  }

  navigateAfterLogin() {
    let returnURL = '';
    this.route.queryParams.subscribe((params: Params) => {
      if (params && params['returnurl']) {
        returnURL = params['returnurl'];
      }
    });

    if (returnURL) {
      this.router.navigateByUrl(returnURL);
    } else if (this.profileService.currentUser.isAdminOnly) {
      this.router.navigate([NAVIGATIONS.Admin]);
    } else if (this.profileService.currentUser.isUserOnly) {
      this.router.navigate([NAVIGATIONS.homePage]);
    }
  }

  validateForm(form: any) {
    Object.keys(form.controls).forEach((key) => {
      form.controls[key].updateValueAndValidity();
    });
  }

  printInvalidProps(form: any) {
    const arr: string[] = [];
    Object.keys(form.controls).forEach((key) => {
      if (form.controls[key].invalid) arr.push(key);
    });
    // this.toastr.error('You missed the following:\n' + arr.toString());
  }
}

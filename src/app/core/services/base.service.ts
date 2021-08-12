import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UtilityService } from './utility.service';

@Injectable()
export class BaseService {
  protected serviceName: string = environment.base_URL;
  protected utilityService: UtilityService;
  protected http: HttpClient;
  protected router: Router;
  protected route: ActivatedRoute;

  constructor(public injector: Injector) {
    this.utilityService = injector.get(UtilityService);
    this.http = injector.get(HttpClient);
    this.router = injector.get(Router);
    this.route = injector.get(ActivatedRoute);
  }

  modelToFormData(model: any) {
    let formData = new FormData();

    Object.keys(model).forEach((key) => {
      if (Array.isArray(model[key])) {
        model[key].forEach((value: any, index: any) => {
          if (
            Object.prototype.toString.call(value) == '[object Object]' ||
            value instanceof Object
          ) {
            Object.keys(value).forEach((innerkey) => {
              if (value[innerkey] != null) {
                formData.append(
                  `${key}[${index}].${innerkey}`,
                  value[innerkey]
                );
              }
            });
          } else {
            formData.append(`${key}[${index}]`, value);
          }
        });
      } else if (model[key] != null) {
        //normal attribute
        formData.append(key, model[key]);
      }
    });

    return formData;
  }
}

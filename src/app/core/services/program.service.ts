import { HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable()
export class ProgramsService extends BaseService {
  protected serviceName!: string;

  constructor(public injector: Injector) {
    super(injector);
  }

  setProgServiceName(name: string) {
    this.serviceName = name;
  }

  addProgram(model: any) {
    let formData = this.modelToFormData(model);
    return this.http.post(
      environment.base_URL + `${this.serviceName}/AddProgram/`,
      formData
    );
  }

  updateProgram(model: any) {
    let formData = this.modelToFormData(model);
    return this.http.post(
      environment.base_URL + `${this.serviceName}/UpdateProgram/`,
      formData
    );
  }

  submitProgram(model: any) {
    let formData = this.modelToFormData(model);
    return this.http.post(
      environment.base_URL + `${this.serviceName}/SubmitProgram/`,
      formData
    );
  }

  saveFeedback(model: any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),
    };
    return this.http.post(
      environment.base_URL + `${this.serviceName}/SaveFeedback/`,
      model,
      options
    );
  }

  submitFeedback(model: any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),
    };
    return this.http.post(
      environment.base_URL + `${this.serviceName}/SubmitFeedback/`,
      model,
      options
    );
  }

  getProgram(id: number) {
    return this.http.get<any[]>(
      environment.base_URL + `${this.serviceName}/GetProgram/${id}?`
    );
  }

  getPrograms(query: any) {
    return this.http.post<any[]>(
      environment.base_URL + `${this.serviceName}/GetAll/`,
      query,
      { observe: 'response' }
    );
  }

  getMyPrograms(query: any) {
    return this.http.post<any[]>(
      environment.base_URL + `${this.serviceName}/GetMyPrograms/`,
      query,
      { observe: 'response' }
    );
  }
}

import { DatePipe } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { DATEFORMAT, SERVICES } from 'src/app/Shared/utils/enums';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import * as _ from 'lodash';

@Injectable()
export class NewsService extends BaseService {
  constructor(public injector: Injector, private datePipe: DatePipe) {
    super(injector);
  }
  // Ned to be changed
  protected serviceName: string = SERVICES.News;

  addNews(model: any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),
    };
    return this.http.post(
      environment.base_URL + `${this.serviceName}/AddNews`,
      this.modelToFormData(this.convertModelDate(model)),
      options
    );
  }

  editNews(model: any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),
    };
    return this.http.post(
      environment.base_URL + `${this.serviceName}/EditNews`,
      this.modelToFormData(this.convertModelDate(model)),
      options
    );
  }

  convertModelDate(model: any) {
    let clonedArticle: any = _.cloneDeep(model);

    clonedArticle.publishDate = this.datePipe.transform(
      clonedArticle.publishDate,
      DATEFORMAT.BEDateFormat
    );

    return clonedArticle;
  }

  getNewsById(id: number) {
    return this.http.get<any[]>(
      environment.base_URL + `${this.serviceName}/GetNews/${id}?`
    );
  }

  getNews(query: any) {
    return this.http.post<any[]>(
      environment.base_URL + `${this.serviceName}/GetAll`,
      query,
      { observe: 'response' }
    );
  }

  deleteNews(id: number) {
    return this.http.delete(
      environment.base_URL + `${this.serviceName}/DeleteNews/${id}?`
    );
  }
}

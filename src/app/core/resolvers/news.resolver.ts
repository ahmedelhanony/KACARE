import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { NewsService } from '../services/news.service';
import * as _ from 'lodash';

@Injectable()
export class NewsResolver implements Resolve<any> {
  constructor(private newsService: NewsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const query: any = {
      pageNumber: 1,
      pageSize: 30,
      visible: route.data.isAdmin ? null : true,
    };

    return this.newsService.getNews({..._.omitBy(query , _.isNull)});
  }
}

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
    return this.http.post(
      environment.base_URL + `${this.serviceName}/AddNews`,
      this.modelToFormData(this.convertModelDate(model))
    );
  }

  editNews(model: any) {
    let blob;
    if (model.image.id) {
      blob = this.b64toBlob(model.image.data, model.image.fileType);
      let file = new File(
        [blob],
        `${model.image.name}${model.image.extension}`,
        { type: model.image.fileType }
      );
      model.image = file;
    }
    return this.http.post(
      environment.base_URL + `${this.serviceName}/EditNews`,
      this.modelToFormData(this.convertModelDate(model))
    );
  }

  b64toBlob(b64Data: string, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
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

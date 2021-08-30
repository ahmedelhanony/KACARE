import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash';

@Injectable()
export class FilesService {
  typeFile: any;
  binaryToBase64: any;
  fileUpload: any;
  srcImg: any;
  imgSize!: string;

  constructor(
    private domSanitizer: DomSanitizer,
    private httpClient: HttpClient
  ) {}

  loadDiagram(singleFileBase64: string) {
    this.typeFile = this.GetFileExtension(singleFileBase64);
    this.binaryToBase64 =
      'data:' + this.typeFile + ';base64,' + singleFileBase64;

    this.fileUpload = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.binaryToBase64.toString()
    );
    this.srcImg = this.fileUpload.changingThisBreaksApplicationSecurity;
  }

  GetFileExtension(data64: String) {
    var data = data64.substring(0, 5);
    //  "IVBOR"://     return "png";
    //  "/9J/4"://      return "jpg & jpng";
    // R0lGO   // gif image

    data = data.toUpperCase();
    if (data == 'IVBOR' || data == '/9J/4' || data == 'R0lGO') {
      console.log('data immge ', data);
      return 'image/png';
    }
    // data=="JVBER" // pdf
    if (data == 'JVBER') {
      console.log('data pdf ', data);
      return 'application/pdf';
    }

    return true;
  }

  showDiagram() {
    const imgUrl = this.srcImg;
    var file;
    this.httpClient
      .get(imgUrl, { responseType: 'blob' as 'json' })
      .subscribe((res: any) => {
        file = new Blob([res], { type: res.type });
        const blob = window.URL.createObjectURL(file);
        console.log('blob', blob);
        window.open(blob, '_blank');
      });
  }

  download() {
    const imgUrl = this.srcImg;
    const imgName = 'Diagram';
    var file;
    this.httpClient
      .get(imgUrl, { responseType: 'blob' as 'json' })
      .subscribe((res: any) => {
        file = new Blob([res], { type: res.type });
        const blob = window.URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = blob;
        link.download = imgName;
        link.dispatchEvent(
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        );
      });
  }
}

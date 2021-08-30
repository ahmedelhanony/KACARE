import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';
import { FilesService } from 'src/app/core/services/file-service/file.service';
@Component({
  selector: 'app-docs-uploader',
  templateUrl: './docs-uploader.component.html',
  styleUrls: ['./docs-uploader.component.scss'],
})
export class DocsUploaderComponent implements OnInit {
  @Input() styleHeight = '';
  @Input() styleWidth = 6;
  @Input() hint = '';
  @Input() label = '';
  @Input() labelHint = '';
  @Input() display = '';

  @Input() singleFileBase64!: string;

  typeFile: any;
  binaryToBase64: any;
  fileUpload: any;
  srcImg: any;
  imgSize!: string;

  constructor(public dialog: MatDialog, private fileService: FilesService) {}

  ngOnInit(): void {
    if (this.singleFileBase64) {
      this.fileService.loadDiagram(this.singleFileBase64);
    }
  }

  onShowDiagram() {
    this.fileService.showDiagram();
  }

  onDownLoadFile() {
    this.fileService.download();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import {
  FileModel,
  FilesService,
} from 'src/app/core/services/file-service/file.service';
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
  @Input() showLabel!: string;
  @Input() labelHint = '';
  @Input() display = '';
  @Input() showDeletionIcon = false;

  @Input() singleFileBase64!: string;
  @Input() ItemFormGroup!: FormGroup;
  @Input() ItemFormControlName!: string;

  selectedFile!: File;
  file!: FileModel;

  constructor(
    public dialog: MatDialog,
    private fileService: FilesService,
    private toastr: ToastrService
  ) {}

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

  onFileChanged(evt: any) {
    let file: any = evt.target.files[0];

    if (file) {
      let filtType = file.type.split('/');

      if (filtType[0] === 'image' || filtType[0] === 'pdf') {
        this.selectedFile = evt.target.files[0];

        this.file = {
          name: this.selectedFile.name,
          size: this.selectedFile.size,
          mimeType: this.selectedFile.type,
          content: this.selectedFile,
        };

        this.ItemFormGroup.patchValue({
          [this.ItemFormControlName]: this.selectedFile,
        });

        this.display = 'files-only';
      } else {
        this.toastr.error('Sorry, File must be of type image or pdf only');
      }
    }
  }

  onDeleteFile() {
    this.display = '';
    this.file = {};
    this.ItemFormGroup.patchValue({
      [this.ItemFormControlName]:
        Object.keys(this.file).length === 0 ? null : this.file,
    });
  }
}

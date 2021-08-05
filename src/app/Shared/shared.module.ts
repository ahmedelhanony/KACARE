import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MaterialModule} from './material.module';
import {DocsUploaderComponent} from './doc-uploader/docs-uploader.component';
import {DeletePopupComponent} from './delete-popup/delete-popup.component';
import { TableListComponent } from './table-list/table-list.component';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';

@NgModule({
  declarations: [
    DocsUploaderComponent,
    DeletePopupComponent,
    TableListComponent,
    ConfirmationPopupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
    exports: [
        MaterialModule,
        DocsUploaderComponent,
        DeletePopupComponent,
        TableListComponent
    ]
})
export class SharedModule {
}

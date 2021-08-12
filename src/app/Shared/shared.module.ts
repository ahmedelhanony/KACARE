import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { DocsUploaderComponent } from './doc-uploader/docs-uploader.component';
import { TableListComponent } from './table-list/table-list.component';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';
import { LayoutComponent } from './layout/layout.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SectionTitleComponent } from './layout/section-title/section-title.component';
import { RouterModule } from '@angular/router';
import { TechnologAreasCardComponent } from './components/technolog-areas-card/technolog-areas-card.component';
import { MainCardComponent } from '../portal/components/cards/main-card/main-card.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DocsUploaderComponent,
    TableListComponent,
    ConfirmationPopupComponent,
    LayoutComponent,
    BreadcrumbComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    SectionTitleComponent,
    TechnologAreasCardComponent,
    MainCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    RxReactiveFormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    DocsUploaderComponent,
    TableListComponent,
    HeaderComponent,
    SectionTitleComponent,
    LayoutComponent,
    TechnologAreasCardComponent,
    MainCardComponent,
    RxReactiveFormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}

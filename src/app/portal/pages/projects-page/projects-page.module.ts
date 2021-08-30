import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsPageRoutingModule } from './projects-page-routing.module';
import { ProjectsPageComponent } from './projects-page.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import {PortalModule} from "../../portal.module";
import {SharedModule} from "../../../Shared/shared.module";
import {HighchartsChartModule} from "highcharts-angular";
import { ProjectGalleryComponent } from './project-details/project-gallery/project-gallery.component';
import {MasonryGalleryModule} from "ngx-masonry-gallery";
import {LightgalleryModule} from "lightgallery/angular";
import {NgxMasonryModule} from "ngx-masonry";
// Import NgMasonryGridModule

@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectDetailsComponent,
    ProjectGalleryComponent
  ],
  imports: [
    CommonModule,
    ProjectsPageRoutingModule,
    HighchartsChartModule,
    PortalModule,
    MasonryGalleryModule,
    LightgalleryModule,
    NgxMasonryModule

  ]
})
export class ProjectsPageModule { }

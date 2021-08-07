import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsPageRoutingModule } from './projects-page-routing.module';
import { ProjectsPageComponent } from './projects-page.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import {PortalModule} from "../../portal.module";
import {SharedModule} from "../../../Shared/shared.module";
import {HighchartsChartModule} from "highcharts-angular";


@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectDetailsComponent
  ],
    imports: [
        CommonModule,
        ProjectsPageRoutingModule,
        HighchartsChartModule,
        PortalModule
    ]
})
export class ProjectsPageModule { }

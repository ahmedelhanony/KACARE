import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsPageRoutingModule } from './news-page-routing.module';
import { NewsDetailsComponent } from './news-details/news-details.component';
import {PortalModule} from "../../portal.module";


@NgModule({
  declarations: [
    NewsDetailsComponent
  ],
  imports: [
    CommonModule,
    NewsPageRoutingModule,
    PortalModule
  ]
})
export class NewsPageModule { }

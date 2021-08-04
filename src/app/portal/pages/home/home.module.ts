import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { GoalsComponent } from './components/goals/goals.component';
import {NgxUsefulSwiperModule} from "ngx-useful-swiper";
import {SharedModule} from "../../../Shared/shared.module";
import {PortalModule} from "../../portal.module";
import { ApplicationsComponent } from './components/applications/applications.component';
import { InfographicsComponent } from './components/infographics/infographics.component';
import { MatchMakingComponent } from './components/match-making/match-making.component';
import { NewsComponent } from './components/news/news.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { FaqsComponent } from './components/faqs/faqs.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    GoalsComponent,
    ApplicationsComponent,
    InfographicsComponent,
    MatchMakingComponent,
    NewsComponent,
    ProjectsComponent,
    TutorialsComponent,
    FaqsComponent
  ],
  exports: [
    FaqsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxUsefulSwiperModule,
    SharedModule,
    PortalModule
  ]
})
export class HomeModule { }

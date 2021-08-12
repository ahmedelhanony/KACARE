import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import {SharedModule} from "../Shared/shared.module";
// import { MainCardComponent } from './components/cards/main-card/main-card.component';
import { FaqComponent } from './components/sections/faq/faq.component';
import { HowItWorksComponent } from './components/sections/how-it-works/how-it-works.component';
import {InfographicsPageComponent} from "./pages/infographics-page/infographics-page.component";
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { ProjectCardComponent } from './components/cards/project-card/project-card.component';
import { ArticleSectionComponent } from './components/sections/article-section/article-section.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ApplicationSectionComponent } from './components/sections/application-section/application-section.component';
import { MatchMakingCardComponent } from './components/cards/match-making-card/match-making-card.component';


@NgModule({
  declarations: [
    // MainCardComponent,
    FaqComponent,
    HowItWorksComponent,
    InfographicsPageComponent,
    FaqPageComponent,
    ProjectCardComponent,
    ArticleSectionComponent,
    NewsPageComponent,
    ApplicationSectionComponent,
    MatchMakingCardComponent,
  ],
  exports: [
    // MainCardComponent,
    FaqComponent,
    HowItWorksComponent,
    ProjectCardComponent,
    ApplicationSectionComponent,
    ArticleSectionComponent,
    MatchMakingCardComponent,
    SharedModule
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    SharedModule
  ]
})
export class PortalModule { }

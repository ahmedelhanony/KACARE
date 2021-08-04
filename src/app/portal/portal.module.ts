import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import {SharedModule} from "../Shared/shared.module";
import { HeaderComponent } from './layout/header/header.component';
import { SectionTitleComponent } from './layout/section-title/section-title.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { MainCardComponent } from './components/cards/main-card/main-card.component';
import { FaqComponent } from './components/sections/faq/faq.component';
import { HowItWorksComponent } from './components/sections/how-it-works/how-it-works.component';
import {InfographicsPageComponent} from "./pages/infographics-page/infographics-page.component";
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { ProjectCardComponent } from './components/cards/project-card/project-card.component';
import { ArticleSectionComponent } from './components/sections/article-section/article-section.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ApplicationSectionComponent } from './components/sections/application-section/application-section.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    SectionTitleComponent,
    BreadcrumbComponent,
    MainCardComponent,
    FaqComponent,
    HowItWorksComponent,
    InfographicsPageComponent,
    FaqPageComponent,
    ProjectCardComponent,
    ArticleSectionComponent,
    NewsPageComponent,
    ApplicationSectionComponent,
  ],
    exports: [
        SectionTitleComponent,
        MainCardComponent,
        FaqComponent,
        HowItWorksComponent,
        HeaderComponent,
        ProjectCardComponent,
        BreadcrumbComponent,
        ApplicationSectionComponent,
        ArticleSectionComponent
    ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    SharedModule
  ]
})
export class PortalModule { }

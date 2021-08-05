import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsComponent } from './applications.component';
import { AllApplicationsComponent } from './components/all-applications/all-applications.component';
import { SubmissionApplicationsComponent } from './components/submission-applications/submission-applications.component';
import { ApplicationDetailsComponent } from './components/application-details/application-details.component';
import { ApplyForApplicationComponent } from './components/apply-for-application/apply-for-application.component';
import { GeneralInfoComponent } from './components/apply-for-application/general-info/general-info.component';
import { TechnologyInfoComponent } from './components/apply-for-application/technology-info/technology-info.component';
import { StrategyTeamsComponent } from './components/apply-for-application/strategy-teams/strategy-teams.component';
import { BenefitCostComponent } from './components/apply-for-application/benefit-cost/benefit-cost.component';
import {PortalModule} from "../../portal.module";
import {SharedModule} from "../../../Shared/shared.module";
import { ApplicationQuizComponent } from './components/application-quiz/application-quiz.component';
import { QuizResultComponent } from './components/application-quiz/quiz-result/quiz-result.component';


@NgModule({
  declarations: [
    ApplicationsComponent,
    AllApplicationsComponent,
    SubmissionApplicationsComponent,
    ApplicationDetailsComponent,
    ApplyForApplicationComponent,
    GeneralInfoComponent,
    TechnologyInfoComponent,
    StrategyTeamsComponent,
    BenefitCostComponent,
    ApplicationQuizComponent,
    QuizResultComponent
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    PortalModule,
    SharedModule
  ]
})
export class ApplicationsModule { }

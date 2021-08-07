import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminMatchMakingComponent } from './components/admin-match-making/admin-match-making.component';
import { AdminApplicationsComponent } from './components/admin-applications/admin-applications.component';
import { AdminFaqsComponent } from './components/admin-faqs/admin-faqs.component';
import { AdminNewsComponent } from './components/admin-news/admin-news.component';
import {SharedModule} from "../Shared/shared.module";
import { AdminApplicationDetailsComponent } from './components/admin-applications/admin-application-details/admin-application-details.component';
import { AdminAddFaqComponent } from './components/admin-faqs/admin-add-faq/admin-add-faq.component';
import { AdminAddArticleComponent } from './components/admin-news/admin-add-article/admin-add-article.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminLoginComponent,
    AdminMatchMakingComponent,
    AdminApplicationsComponent,
    AdminFaqsComponent,
    AdminNewsComponent,
    AdminApplicationDetailsComponent,
    AdminAddFaqComponent,
    AdminAddArticleComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AdminMatchMakingComponent} from "./components/admin-match-making/admin-match-making.component";
import {AdminApplicationsComponent} from "./components/admin-applications/admin-applications.component";
import {AdminNewsComponent} from "./components/admin-news/admin-news.component";
import {AdminFaqsComponent} from "./components/admin-faqs/admin-faqs.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'match-making',
        component: AdminMatchMakingComponent
      },
      {
        path: 'applications/:id',
        component: AdminApplicationsComponent
      },
      {
        path: 'news',
        component: AdminNewsComponent
      },
      {
        path: 'faqs',
        component: AdminFaqsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

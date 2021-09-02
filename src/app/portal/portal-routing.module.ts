import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../Shared/layout/layout.component';
import { InfographicsPageComponent } from './pages/infographics-page/infographics-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { UserGuard } from '../core/guards/user.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import(`./pages/home/home.module`).then((m) => m.HomeModule),
      },
      {
        path: 'match-making',
        loadChildren: () =>
          import(`./pages/match-making/match-making.module`).then(
            (m) => m.MatchMakingModule
          ),
      },
      {
        path: 'applications',
        loadChildren: () =>
          import(`./pages/applications/applications.module`).then(
            (m) => m.ApplicationsModule
          ),
      },
      {
        path: 'infographics',
        component: InfographicsPageComponent,
        data: { breadcrumb: 'Infographics' },
      },
      {
        path: 'faqs',
        component: FaqPageComponent,
        data:{breadcrumb : 'FAQS'}
      },
      {
        path: 'past-projects',
        loadChildren: () =>
          import(`./pages/projects-page/projects-page.module`).then(
            (m) => m.ProjectsPageModule
          ),
      },
      {
        path: 'news',
        loadChildren: () =>
          import(`./pages/news-page/news-page.module`).then(
            (m) => m.NewsPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}

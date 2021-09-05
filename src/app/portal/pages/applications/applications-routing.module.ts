import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyAppGuard } from 'src/app/core/guards/apply-app.guard';
import { BreadcrumbResolver } from 'src/app/core/resolvers/breadcrumb.resolver';
import { ApplicationsComponent } from './applications.component';
import { ApplicationDetailsComponent } from './components/application-details/application-details.component';
import { ApplyForApplicationComponent } from './components/apply-for-application/apply-for-application.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationsComponent,
    data: { breadcrumb: 'Applications' },
  },
  {
    path: 'application-details/:id',
    component: ApplicationDetailsComponent,
    data: { 
      breadcrumb: (data: any) => `Applications / ${data.appName}`,
      URL : '/applications'
   },
    resolve: { appName: BreadcrumbResolver },
  },
  {
    path: 'apply/:name',
    component: ApplyForApplicationComponent,
    canActivate: [ApplyAppGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationsRoutingModule {}

import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutComponent } from './Shared/layout/layout.component';

const routes: Routes = [
  {
    path: 'sandbox',
    loadChildren: () =>
      import(`./sandbox/sandbox.module`).then((m) => m.SandboxModule),
  },
  {
    path: '',
    loadChildren: () =>
      import(`./portal/portal.module`).then((m) => m.PortalModule),
  },
  {
    path: '',
    loadChildren: () =>
      import(`./login/login.module`).then((m) => m.LoginModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import(`./admin/admin.module`).then((m) => m.AdminModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'contact-us', component: ContactUsComponent, data: {breadcrumb: 'Contact Us'}},
      {path: '404', component: NotFoundComponent},

    ]
  },
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

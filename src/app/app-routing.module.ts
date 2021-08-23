import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessDeniedComponent } from './Shared/components/access-denied/access-denied.component';

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
    path: 'access-denied',
    component: AccessDeniedComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

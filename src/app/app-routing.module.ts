import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'sandbox',
    loadChildren: () => import(`./sandbox/sandbox.module`).then(m => m.SandboxModule)
  },
  {
    path: '',
    loadChildren: () => import(`./portal/portal.module`).then(m => m.PortalModule)
  },
  {
    path: '',
    loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

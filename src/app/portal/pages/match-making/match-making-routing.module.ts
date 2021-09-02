import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchMakingComponent } from './match-making.component';
import { MatchMakingDetailsComponent } from './components/match-making-details/match-making-details.component';
import { DefaultMatchMakingComponent } from './components/default-match-making/default-match-making.component';
import { MyMatchMakingComponent } from './components/my-match-making/my-match-making.component';
import { AllMatchMakingComponent } from './components/all-match-making/all-match-making.component';

const routes: Routes = [
  {
    path: '',
    component: MatchMakingComponent,
    children: [
      {
        path: 'all-match-making',
        component: AllMatchMakingComponent,
        data: { breadcrumb: 'All Match Making' },
      },
      {
        path: 'my-match-making',
        component: MyMatchMakingComponent,
        data: { breadcrumb: 'My Match Making' },
      },
      {
        path: '',
        redirectTo: 'all-match-making',
      },
    ],
  },
  {
    path: 'test',
    component: DefaultMatchMakingComponent,
  },
  {
    path: 'match-making-details/:id',
    component: MatchMakingDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchMakingRoutingModule {}

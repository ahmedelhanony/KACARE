import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchMakingComponent } from './match-making.component';
import { MatchMakingDetailsComponent } from './components/match-making-details/match-making-details.component';
import { DefaultMatchMakingComponent } from './components/default-match-making/default-match-making.component';

const routes: Routes = [
  {
    path: '',
    component: MatchMakingComponent,
  },
  {
    path: 'testMatch',
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

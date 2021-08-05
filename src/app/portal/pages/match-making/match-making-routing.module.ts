import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatchMakingComponent} from "./match-making.component";
import {MatchMakingDetailsComponent} from "./components/match-making-details/match-making-details.component";

const routes: Routes = [
  {
    path:'',
    component: MatchMakingComponent
  },
  {
    path: 'match-making-details/:id',
    component: MatchMakingDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchMakingRoutingModule { }

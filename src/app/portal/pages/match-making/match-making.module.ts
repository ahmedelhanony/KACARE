import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchMakingRoutingModule } from './match-making-routing.module';
import { MatchMakingComponent } from './match-making.component';
import { AllMatchMakingComponent } from './components/all-match-making/all-match-making.component';
import { MyMatchMakingComponent } from './components/my-match-making/my-match-making.component';
import { AddMatchMakingComponent } from './components/add-match-making/add-match-making.component';
import { MatchMakingDetailsComponent } from './components/match-making-details/match-making-details.component';
import {PortalModule} from "../../portal.module";
import {SharedModule} from "../../../Shared/shared.module";
import { DefaultMatchMakingComponent } from './components/default-match-making/default-match-making.component';


@NgModule({
  declarations: [
    MatchMakingComponent,
    AllMatchMakingComponent,
    MyMatchMakingComponent,
    AddMatchMakingComponent,
    MatchMakingDetailsComponent,
    DefaultMatchMakingComponent
  ],
    imports: [
        CommonModule,
        MatchMakingRoutingModule,
        SharedModule,
        PortalModule
    ]
})
export class MatchMakingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsPageComponent} from "./news-page.component";
import {NewsDetailsComponent} from "./news-details/news-details.component";


const routes: Routes = [
  {
    path: '',
    component: NewsPageComponent,
  },
  {
    path: 'news-details',
    component: NewsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsPageRoutingModule { }

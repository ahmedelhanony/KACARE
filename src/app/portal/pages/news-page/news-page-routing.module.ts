import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPageComponent } from './news-page.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsResolver } from 'src/app/core/resolvers/news.resolver';

const routes: Routes = [
  {
    path: '',
    component: NewsPageComponent,
    data: { isAdmin: false, breadcrumb: 'News' },
    resolve: { news: NewsResolver },
  },
  {
    path: 'news-details/:id',
    component: NewsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPageRoutingModule {}

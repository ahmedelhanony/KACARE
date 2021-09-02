import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsModel } from 'src/app/core/models/news/news.model';
import { NewsService } from 'src/app/core/services/news.service';
import { NAVIGATIONS } from 'src/app/Shared/utils/enums';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit {
  newsDetails = new NewsModel();
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');

    if (!+id) {
      this.router.navigate([NAVIGATIONS.News]);
      return;
    }

    this.newsService.getNewsById(+id).subscribe(
      (res: any) => {
        if (res && !res.status) {
          this.newsDetails = { ...res.result };
          if (this.newsDetails.image && this.newsDetails.image.data) {
            this.newsDetails.imageSrc = `data:image/jpeg;base64,${this.newsDetails.image.data}`;
          }else{
            // this.newsDetails.imageSrc = 'assets/images/logo.svg'
            this.newsDetails.imageSrc = '/assets/images/news/news-details.jpg'           
          }
        }
      },
      () => {
        this.router.navigate([NAVIGATIONS.News]);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/app/core/models/news/news.model';
import { NewsService } from 'src/app/core/services/news.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    loop: true,
    watchSlidesVisibility: true,
    breakpoints: {
      480: {
        slidesPerView: 1,
        freeMode: true,
      },
      600: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };

  news = new Array<NewsModel>();

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    const query: any = {
      pageNumber: 1,
      pageSize: 25,
      visible: true,
    };
    this.newsService.getNews(query).subscribe((res: any) => {
      if (res && res.body.length) {
        this.news = [...res.body];
        this.news.map((news: NewsModel) => {
          news.imageSrc = `data:image/jpeg;base64,${news.image.data}`;
        });
      }
    });
  }
}

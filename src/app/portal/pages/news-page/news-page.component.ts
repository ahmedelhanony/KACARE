import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsModel } from 'src/app/core/models/news/news.model';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  news = new Array<NewsModel>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.news = this.route.snapshot.data.news.body;

    this.news.map((news: NewsModel) => {
      news.imageSrc = `data:image/jpeg;base64,${news.image.data}`;
    });
  }
}

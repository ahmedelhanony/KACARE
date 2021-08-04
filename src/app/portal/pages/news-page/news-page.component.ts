import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  news = [
    {
      title: 'Energy storage systems are key to managing variations in energy...',
      date: '22/11/2021',
      image: 'assets/images/news/news-1.jpg',
      id:'1'
    },
    {
      title: 'Energy storage systems are key to managing variations in energy...',
      date: '22/11/2021',
      image: 'assets/images/news/news-2.jpg',
      id:'1'
    },
    {
      title: 'Energy storage systems are key to managing variations in energy...',
      date: '22/11/2021',
      image: 'assets/images/news/news-3.jpg',
      id:'1'
    },
    {
      title: 'Energy storage systems are key to managing variations in energy...',
      date: '22/11/2021',
      image: 'assets/images/news/news-1.jpg',
      id:'1'
    },
    {
      title: 'Energy storage systems are key to managing variations in energy...',
      date: '22/11/2021',
      image: 'assets/images/news/news-1.jpg',
      id:'1'
    },
    {
      title: 'Energy storage systems are key to managing variations in energy...',
      date: '22/11/2021',
      image: 'assets/images/news/news-1.jpg',
      id:'1'
    },
    {
      title: 'Energy storage systems are key to managing variations in energy...',
      date: '22/11/2021',
      image: 'assets/images/news/news-1.jpg',
      id:'1'
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}

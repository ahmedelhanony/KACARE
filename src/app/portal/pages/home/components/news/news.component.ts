import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
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
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    // pagination: { el: '.swiper-pagination', clickable: true},
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev'
    },
    loop: true,
    watchSlidesVisibility:true,
    breakpoints: {
      480: {
        slidesPerView: 1,
        freeMode: true
      },
      600: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 3
      }
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}

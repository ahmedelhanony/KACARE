import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  hero = [
    {
      title: 'Enabling Sustainable Development of the Renewable Energy',
      imageUrl: 'assets/images/hero-1.jpg',
      description: 'Promote and facilitate technology localization to enable sustainable development of the Renewable Energy sector in the kingdom ',
      link: '/'
    },
    {
      title: 'Enabling Sustainable Development of the Renewable Energy',
      imageUrl: 'assets/images/hero-2.jpg',
      description: 'Promote and facilitate technology localization to enable sustainable development of the Renewable Energy sector in the kingdom ',
      link: '/'
    }
  ]
  config: SwiperOptions = {
    slidesPerView: 1,
    pagination: { el: '.swiper-pagination', clickable: true},
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev'
    },
    loop: true
  };
  constructor() { }

  ngOnInit(): void {
  }

}

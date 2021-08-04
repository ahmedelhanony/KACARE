import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";

@Component({
  selector: 'app-match-making',
  templateUrl: './match-making.component.html',
  styleUrls: ['./match-making.component.scss']
})
export class MatchMakingComponent implements OnInit {
  isRegister = true;


  companies = [
    {
      name: 'Organization Name',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      email: 'Email@companyname.com.sa',
      technology: 'Solar Cooling',
      role:'Off Takers'
    },
    {
      name: 'Organization Name',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      email: 'Email@companyname.com.sa',
      technology: 'Solar Cooling',
      role:'Off Takers'
    },
    {
      name: 'Organization Name',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      email: 'Email@companyname.com.sa',
      technology: 'Solar Cooling',
      role:'Off Takers'
    },
    {
      name: 'Organization Name',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      email: 'Email@companyname.com.sa',
      technology: 'Solar Cooling',
      role:'Off Takers'
    },
    {
      name: 'Organization Name',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      email: 'Email@companyname.com.sa',
      technology: 'Solar Cooling',
      role:'Off Takers'
    },
    {
      name: 'Organization Name',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      email: 'Email@companyname.com.sa',
      technology: 'Solar Cooling',
      role:'Off Takers'
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
        slidesPerView: 4
      }
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

  getFirstChar(text: string){
    let characters = text.match(/\b(\w)/g);
    if(characters) {
      return characters.join('');
    }else {
      return false
    }
  }

}

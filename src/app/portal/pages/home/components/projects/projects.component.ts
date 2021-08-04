import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'Brilliant Solar Solution',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',
      image: 'assets/images/project.svg',
      technology: 'Desert Technologies ',
      location:'Jeddah Makkah Highway',
      date: '27 Months',
      id: '1'
    },
    {
      title: 'Brilliant Solar Solution',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',
      image: 'assets/images/project.svg',
      technology: 'Desert Technologies ',
      location:'Jeddah Makkah Highway',
      date: '27 Months',
      id: '1'
    },
    {
      title: 'Brilliant Solar Solution',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',
      image: 'assets/images/project.svg',
      technology: 'Desert Technologies ',
      location:'Jeddah Makkah Highway',
      date: '27 Months',
      id: '1'
    },
    {
      title: 'Brilliant Solar Solution',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',
      image: 'assets/images/project.svg',
      technology: 'Desert Technologies ',
      location:'Jeddah Makkah Highway',
      date: '27 Months',
      id: '1'
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
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 2
      }
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}

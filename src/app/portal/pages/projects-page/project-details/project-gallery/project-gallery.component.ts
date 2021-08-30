import { Component, OnInit } from '@angular/core';
import {IMasonryGalleryImage} from "ngx-masonry-gallery";
import {BeforeSlideDetail, InitDetail} from "lightgallery/lg-events";
import lgZoom from 'lightgallery/plugins/zoom';
import {LightGallery} from "lightgallery/lightgallery";

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.scss']
})
export class ProjectGalleryComponent implements OnInit {


  private urls: string[] = [
    'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg',
    'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg',
  ];

  public get images(): IMasonryGalleryImage[] {
    return this.items.map(m => <IMasonryGalleryImage>{
      imageUrl: m.src
    });
  }

  private lightGallery!: LightGallery;
  title = 'angular-demo';
  settings = {
    counter: false,
    // plugins: [lgZoom],
    animateThumb: false,
    zoomFromOrigin: false,
    allowMediaOverlap: true,
    toggleThumb: true,


  };
  items = [
    {
      src: '',
      thumb: '',
    },
  ];
  onInit = (detail: InitDetail): void => {
    this.lightGallery = detail.instance;
  };

constructor() { }

  ngOnInit(): void {
  }

}

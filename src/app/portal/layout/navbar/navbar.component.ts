import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navOpened = false;
  dropdownOpened = false;
  activeMenuItem = -1;

  menuList = [
    {
      label: 'Home',
      link: '/home',
    },
    {
      label: 'Match making',
      link: 'match-making',
    },
    {
      label: 'Applications',
      link: 'applications',
      hasChildren: true,
      children: [
        {
          label: 'All Applications',
          link: '/applications',
        },
        {
          label: 'Proof Of Concept',
          link: '/applications/application-details/proof-of-concept',
        },
        {
          label: 'Product Development',
          link: '/applications/application-details/Product-Development',
        },
        {
          label: 'Feasibility Study Program',
          link: '/applications/application-details/Feasibility-Study-Program',
        },
        {
          label: 'Demonstration Projects ',
          link: '/applications/application-details/Demonstration-Projects',
        },
      ]
    },
    {
      label: 'Infographics',
      link: 'infographics'
    },
    {
      label: 'News',
      link: 'news',
    },
    {
      label: 'Past Projects',
      link: 'past-projects',
    },
  ];

  user = {
    name: 'Ahmed Elhanony',
    img: null,
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav(): void {
    this.navOpened = !this.navOpened;
    this.activeMenuItem = -1;
  }

  toggleDropDown(): void {
    this.dropdownOpened = !this.dropdownOpened;
  }

  setActiveIndex(index: number) {
    this.activeMenuItem = index;
    // console.log(index);
    // console.log(this.activeMenuItem)
  }

  getActiveClass(i: number) {
    return this.activeMenuItem == i ? 'collapse-dropdown' : '';
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

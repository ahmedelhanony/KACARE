import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { MatchMakingService } from 'src/app/core/services/matchmaking.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { SharedDataService } from 'src/app/core/services/sharedData.service';
import { getFirstChar } from '../../utils/utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() isPortal = true;
  navOpened = false;
  dropdownOpened = false;
  menuList: any;
  activeMenuItem = -1;

  adminMenuList = [
    {
      label: 'Match making',
      link: 'match-making',
      image: 'match-making',
      items: true,
    },
    {
      label: 'Applications',
      link: 'applications',
      image: 'applications',
      hasChildren: true,
      children: [
        {
          label: 'All Applications',
          link: '/applications',
        },
        {
          label: 'Proof Of Concept',
          link: '/admin/applications/Proof-Of-Concept',
        },
        {
          label: 'Product Development',
          link: '/admin/applications/Product-Development',
        },
        {
          label: 'Feasibility Study Program',
          link: '/admin/applications/Feasibility-Studies',
        },
        {
          label: 'Demonstration Projects ',
          link: '/admin/applications/Demonstration-Projects',
        },
      ],
    },
    {
      label: 'News',
      link: 'news',
      image: 'news',
    },
    {
      label: 'FAQ',
      link: 'faqs',
      image: 'faqs',
    },
  ];

  portalList = [
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
          link: '/applications/application-details/Proof-Of-Concept',
        },
        {
          label: 'Product Development',
          link: '/applications/application-details/Product-Development',
        },
        {
          label: 'Feasibility Study Program',
          link: '/applications/application-details/Feasibility-Studies',
        },
        {
          label: 'Demonstration Projects ',
          link: '/applications/application-details/Demonstration-Projects',
        },
      ],
    },
    {
      label: 'Resources',
      link: '/infographics',
      hasChildren: true,
      children: [
        {
          label: 'Technology Areas',
          link: '/infographics',
        },
        {
          label: 'Tutorials',
          link: '/home/tutorials',
        },
      ],
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
    name: '',
    img: null,
  };

  unPublishedMatchMakings!: number;

  isAuthenticated = false;
  subs: Subscription = new Subscription();

  constructor(
    private sharedDataService: SharedDataService,
    private profileService: ProfileService,
    private matchMakingService: MatchMakingService
  ) {}

  ngOnInit(): void {
    this.handleViewBasedOnUserAuth();
  }

  ngAfterViewInit(): void {
    this.subs.add(
      this.sharedDataService.isUserLoggedOut$.subscribe(
        (isUserLogedOut: boolean) => {
          if (isUserLogedOut) {
            this.handleViewBasedOnUserAuth();
          }
        }
      )
    );

    this.subs.add(
      this.sharedDataService.isMatchMakingToggled$.subscribe(
        (isToggled: boolean) => {
          if (isToggled) {
            this.getUnpublishMatchMaking();
          }
        }
      )
    );
  }

  handleViewBasedOnUserAuth() {
    this.isAuthenticated = this.profileService.currentUser.isAuthenticated;
    if (this.isAuthenticated) {
      this.user.name = this.profileService.currentUser.fullName;
      if (this.profileService.currentUser.isAdminOnly) {
        this.getUnpublishMatchMaking();
      }
    }

    if (this.isPortal) {
      this.menuList = this.portalList;
    } else {
      this.menuList = this.adminMenuList;
    }
  }

  getUnpublishMatchMaking() {
    this.matchMakingService
      .getUnPublishedMatchMaking()
      .subscribe((res: any) => {
        if (res && !res.status) {
          this.unPublishedMatchMakings = res.result;
        }
      });
  }

  toggleNav(): void {
    this.navOpened = !this.navOpened;
    this.activeMenuItem = -1;
  }

  setActiveIndex(index: number) {
    this.activeMenuItem = index;
    this.dropdownOpened = !this.dropdownOpened;
  }

  routeFalse(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  truncateName(text: string) {
    return getFirstChar(text);
  }

  logout() {
    this.profileService.clearProfile();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { MatchMakingService } from 'src/app/core/services/matchmaking.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-match-making',
  templateUrl: './match-making.component.html',
  styleUrls: ['./match-making.component.scss'],
})
export class MatchMakingComponent implements OnInit {
  companies: any = [];
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    // pagination: { el: '.swiper-pagination', clickable: true},
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
        slidesPerView: 4,
      },
    },
  };

  isAuthenticated!: boolean;
  isUser = false;
  showSpinner = false;

  constructor(
    private matchMakingService: MatchMakingService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.profileService.currentUser.isAuthenticated;

    if (this.isAuthenticated) {
      this.isUser = this.profileService.currentUser.isUserOnly;

      this.getMatchMakings();
    }
  }

  getMatchMakings() {
    this.showSpinner = true;

    const params: any = {
      pageNumber: 1,
      pageSize: 10,
      visible: true,
    };

    this.matchMakingService
      .getMatchMakings(params)
      .pipe(
        finalize(() => {
          this.showSpinner = false;
        })
      )
      .subscribe((response: any) => {
        if (response && response.body && response.body.length) {
          this.companies = [...response.body];
        } else {
          this.companies = [];
        }
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading/loading.service';

@Component({
  selector: 'app-shared-no-data-found',
  templateUrl: './no-data-found.component.html',
  styleUrls: ['./no-data-found.component.scss'],
})
export class NoDataFoundComponent implements OnInit {
  loading$ = this.loader.loading$;
  showImage = false;
  constructor(private loader: LoadingService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showImage = true;
    },500);
  }
}

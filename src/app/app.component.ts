import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Observable } from 'rxjs';
import { LoadingService } from './core/services/loading/loading.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'starter-angular';
  showSpinner = true;

  loading$!: Observable<any>;
  constructor(private loader: LoadingService) {
    this.loading$ = this.loader.loading$;
  }

  ngOnInit() {
    AOS.init();
    
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
  }
}

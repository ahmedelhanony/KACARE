import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreadcrumbService } from 'src/app/core/services/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  breadcrumbs$: Observable<any[]>;

  constructor(
    private readonly breadcrumbService: BreadcrumbService,
    private router: Router
  ) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
  }

  onNavigate(url: string) {
    if (url) {
      this.router.navigate([url]);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreadcrumbService } from 'src/app/core/services/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  // breadcrumbs = this.activatedRoute.data.pipe(map(res => res.breadcrumbs))

  breadcrumbs$: Observable<any[]>;

  constructor(private readonly breadcrumbService: BreadcrumbService) {
    debugger
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
  }
}

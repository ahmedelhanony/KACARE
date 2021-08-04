import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs = this.activatedRoute.data.pipe(map(res => res.breadcrumbs))
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}

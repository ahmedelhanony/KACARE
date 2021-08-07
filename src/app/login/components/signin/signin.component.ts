import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  adminView: any;
  isPortalView = true;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.adminView = this.route.data.subscribe(v => this.isPortalView = v.isPortalView );
    console.log(this.isPortalView)
  }

  ngOnDestroy() {
    this.adminView.unsubscribe();
  }

}

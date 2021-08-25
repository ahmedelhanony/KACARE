import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../core/services/loading/loading.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  loading$ = this.loader.loading$;
  constructor(public loader: LoadingService) {}
  ngOnInit(): void {}
}

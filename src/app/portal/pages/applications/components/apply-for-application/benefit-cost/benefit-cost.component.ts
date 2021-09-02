import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { APPLICATIONAMES } from 'src/app/Shared/utils/applications-data';

@Component({
  selector: 'app-benefit-cost',
  templateUrl: './benefit-cost.component.html',
  styleUrls: ['./benefit-cost.component.scss'],
})
export class BenefitCostComponent implements OnInit {
  @Input() benefitsForm!: FormGroup;
  @Input() appName!: string;
  public get APPNAMES(): typeof APPLICATIONAMES {
    return APPLICATIONAMES;
  }
  
  constructor() {}

  ngOnInit(): void {}
}

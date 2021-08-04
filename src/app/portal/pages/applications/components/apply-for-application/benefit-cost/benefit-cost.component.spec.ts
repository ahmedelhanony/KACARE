import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitCostComponent } from './benefit-cost.component';

describe('BenefitCostComponent', () => {
  let component: BenefitCostComponent;
  let fixture: ComponentFixture<BenefitCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitCostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

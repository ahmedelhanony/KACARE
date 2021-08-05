import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMatchMakingComponent } from './all-match-making.component';

describe('AllMatchMakingComponent', () => {
  let component: AllMatchMakingComponent;
  let fixture: ComponentFixture<AllMatchMakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMatchMakingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMatchMakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

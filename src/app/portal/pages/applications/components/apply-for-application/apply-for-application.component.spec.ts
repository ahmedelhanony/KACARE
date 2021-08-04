import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForApplicationComponent } from './apply-for-application.component';

describe('ApplayForApplicationComponent', () => {
  let component: ApplyForApplicationComponent;
  let fixture: ComponentFixture<ApplyForApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyForApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

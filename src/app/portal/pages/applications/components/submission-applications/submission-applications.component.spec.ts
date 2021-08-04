import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionApplicationsComponent } from './submission-applications.component';

describe('SubmissionApplicationsComponent', () => {
  let component: SubmissionApplicationsComponent;
  let fixture: ComponentFixture<SubmissionApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissionApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

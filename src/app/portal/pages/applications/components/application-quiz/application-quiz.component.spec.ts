import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationQuizComponent } from './application-quiz.component';

describe('ApplicationQuizComponent', () => {
  let component: ApplicationQuizComponent;
  let fixture: ComponentFixture<ApplicationQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

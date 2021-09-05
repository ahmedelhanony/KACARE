import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsTableComponent } from './tutorials-table.component';

describe('TutorialsTableComponent', () => {
  let component: TutorialsTableComponent;
  let fixture: ComponentFixture<TutorialsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicsPageComponent } from './infographics-page.component';

describe('InfographicsPageComponent', () => {
  let component: InfographicsPageComponent;
  let fixture: ComponentFixture<InfographicsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographicsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfographicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

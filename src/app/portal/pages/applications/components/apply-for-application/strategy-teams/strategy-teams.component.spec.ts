import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyTeamsComponent } from './strategy-teams.component';

describe('StrategyTeamsComponent', () => {
  let component: StrategyTeamsComponent;
  let fixture: ComponentFixture<StrategyTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategyTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

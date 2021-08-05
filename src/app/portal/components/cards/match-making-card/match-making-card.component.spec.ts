import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchMakingCardComponent } from './match-making-card.component';

describe('MatchMakingCardComponent', () => {
  let component: MatchMakingCardComponent;
  let fixture: ComponentFixture<MatchMakingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchMakingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchMakingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

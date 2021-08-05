import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchMakingDetailsComponent } from './match-making-details.component';

describe('MatchMakingDetailsComponent', () => {
  let component: MatchMakingDetailsComponent;
  let fixture: ComponentFixture<MatchMakingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchMakingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchMakingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

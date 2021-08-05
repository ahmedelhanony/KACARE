import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMatchMakingComponent } from './add-match-making.component';

describe('AddMatchMakingComponent', () => {
  let component: AddMatchMakingComponent;
  let fixture: ComponentFixture<AddMatchMakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMatchMakingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMatchMakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

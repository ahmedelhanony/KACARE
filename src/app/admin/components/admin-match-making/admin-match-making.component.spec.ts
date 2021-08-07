import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMatchMakingComponent } from './admin-match-making.component';

describe('AdminMatchMakingComponent', () => {
  let component: AdminMatchMakingComponent;
  let fixture: ComponentFixture<AdminMatchMakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMatchMakingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMatchMakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

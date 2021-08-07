import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddFaqComponent } from './admin-add-faq.component';

describe('AdminAddFaqComponent', () => {
  let component: AdminAddFaqComponent;
  let fixture: ComponentFixture<AdminAddFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

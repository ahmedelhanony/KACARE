import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMatchMakingComponent } from './my-match-making.component';

describe('MyMatchMakingComponent', () => {
  let component: MyMatchMakingComponent;
  let fixture: ComponentFixture<MyMatchMakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMatchMakingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMatchMakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

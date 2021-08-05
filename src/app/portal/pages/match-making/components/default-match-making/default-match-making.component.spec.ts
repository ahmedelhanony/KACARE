import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultMatchMakingComponent } from './default-match-making.component';

describe('DefaultMatchMakingComponent', () => {
  let component: DefaultMatchMakingComponent;
  let fixture: ComponentFixture<DefaultMatchMakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultMatchMakingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultMatchMakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

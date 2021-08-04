import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StcIconsComponent } from './stc-icons.component';

describe('StcIconsComponent', () => {
  let component: StcIconsComponent;
  let fixture: ComponentFixture<StcIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StcIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StcIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

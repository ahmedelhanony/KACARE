import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyInfoComponent } from './technology-info.component';

describe('TechnologyInfoComponent', () => {
  let component: TechnologyInfoComponent;
  let fixture: ComponentFixture<TechnologyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

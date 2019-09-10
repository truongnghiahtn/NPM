import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaComplexComponent } from './cinema-complex.component';

describe('CinemaComplexComponent', () => {
  let component: CinemaComplexComponent;
  let fixture: ComponentFixture<CinemaComplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaComplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

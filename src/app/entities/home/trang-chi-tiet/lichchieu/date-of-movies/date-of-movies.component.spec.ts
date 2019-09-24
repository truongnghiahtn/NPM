import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateOfMoviesComponent } from './date-of-movies.component';

describe('DateOfMoviesComponent', () => {
  let component: DateOfMoviesComponent;
  let fixture: ComponentFixture<DateOfMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateOfMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateOfMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

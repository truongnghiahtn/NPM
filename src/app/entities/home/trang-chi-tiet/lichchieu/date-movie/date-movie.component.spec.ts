import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateMovieComponent } from './date-movie.component';

describe('DateMovieComponent', () => {
  let component: DateMovieComponent;
  let fixture: ComponentFixture<DateMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTimerComponent } from './movie-timer.component';

describe('MovieTimerComponent', () => {
  let component: MovieTimerComponent;
  let fixture: ComponentFixture<MovieTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

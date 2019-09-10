import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselItemPhimComponent } from './carousel-item-phim.component';

describe('CarouselItemPhimComponent', () => {
  let component: CarouselItemPhimComponent;
  let fixture: ComponentFixture<CarouselItemPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselItemPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselItemPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

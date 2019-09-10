import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselItemDetailComponent } from './carousel-item-detail.component';

describe('CarouselItemDetailComponent', () => {
  let component: CarouselItemDetailComponent;
  let fixture: ComponentFixture<CarouselItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

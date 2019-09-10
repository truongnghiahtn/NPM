import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCinemasComponent } from './list-cinemas.component';

describe('ListCinemasComponent', () => {
  let component: ListCinemasComponent;
  let fixture: ComponentFixture<ListCinemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCinemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCinemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

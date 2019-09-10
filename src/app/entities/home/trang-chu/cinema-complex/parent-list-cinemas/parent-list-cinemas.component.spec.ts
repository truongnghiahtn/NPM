import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentListCinemasComponent } from './parent-list-cinemas.component';

describe('ParentListCinemasComponent', () => {
  let component: ParentListCinemasComponent;
  let fixture: ComponentFixture<ParentListCinemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentListCinemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentListCinemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

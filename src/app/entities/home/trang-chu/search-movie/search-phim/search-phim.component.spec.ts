import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPhimComponent } from './search-phim.component';

describe('SearchPhimComponent', () => {
  let component: SearchPhimComponent;
  let fixture: ComponentFixture<SearchPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

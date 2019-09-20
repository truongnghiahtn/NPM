import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNgayComponent } from './search-ngay.component';

describe('SearchNgayComponent', () => {
  let component: SearchNgayComponent;
  let fixture: ComponentFixture<SearchNgayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNgayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNgayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

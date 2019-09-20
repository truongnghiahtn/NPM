import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGioComponent } from './search-gio.component';

describe('SearchGioComponent', () => {
  let component: SearchGioComponent;
  let fixture: ComponentFixture<SearchGioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

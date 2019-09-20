import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRapComponent } from './search-rap.component';

describe('SearchRapComponent', () => {
  let component: SearchRapComponent;
  let fixture: ComponentFixture<SearchRapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

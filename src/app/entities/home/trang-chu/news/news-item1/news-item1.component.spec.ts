import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItem1Component } from './news-item1.component';

describe('NewsItem1Component', () => {
  let component: NewsItem1Component;
  let fixture: ComponentFixture<NewsItem1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsItem1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

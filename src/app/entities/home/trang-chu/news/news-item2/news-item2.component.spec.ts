import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItem2Component } from './news-item2.component';

describe('NewsItem2Component', () => {
  let component: NewsItem2Component;
  let fixture: ComponentFixture<NewsItem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsItem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

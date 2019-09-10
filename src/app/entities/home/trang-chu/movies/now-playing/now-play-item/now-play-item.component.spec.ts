import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlayItemComponent } from './now-play-item.component';

describe('NowPlayItemComponent', () => {
  let component: NowPlayItemComponent;
  let fixture: ComponentFixture<NowPlayItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowPlayItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowPlayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

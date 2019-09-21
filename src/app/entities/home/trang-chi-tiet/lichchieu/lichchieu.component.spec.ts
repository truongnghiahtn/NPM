import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichchieuComponent } from './lichchieu.component';

describe('LichchieuComponent', () => {
  let component: LichchieuComponent;
  let fixture: ComponentFixture<LichchieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichchieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichchieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

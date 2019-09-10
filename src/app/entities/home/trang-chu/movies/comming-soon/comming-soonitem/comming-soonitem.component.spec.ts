import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommingSoonitemComponent } from './comming-soonitem.component';

describe('CommingSoonitemComponent', () => {
  let component: CommingSoonitemComponent;
  let fixture: ComponentFixture<CommingSoonitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommingSoonitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommingSoonitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

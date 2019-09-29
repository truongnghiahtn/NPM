import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuangCaoComponent } from './quang-cao.component';

describe('QuangCaoComponent', () => {
  let component: QuangCaoComponent;
  let fixture: ComponentFixture<QuangCaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuangCaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuangCaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

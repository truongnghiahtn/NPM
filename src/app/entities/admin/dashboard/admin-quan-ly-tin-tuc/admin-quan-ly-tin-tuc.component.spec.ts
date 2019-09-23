import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuanLyTinTucComponent } from './admin-quan-ly-tin-tuc.component';

describe('AdminQuanLyTinTucComponent', () => {
  let component: AdminQuanLyTinTucComponent;
  let fixture: ComponentFixture<AdminQuanLyTinTucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuanLyTinTucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuanLyTinTucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuanLyNguoiDungComponent } from './admin-quan-ly-nguoi-dung.component';

describe('AdminQuanLyNguoiDungComponent', () => {
  let component: AdminQuanLyNguoiDungComponent;
  let fixture: ComponentFixture<AdminQuanLyNguoiDungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuanLyNguoiDungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuanLyNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuanLyPhimComponent } from './admin-quan-ly-phim.component';

describe('AdminQuanLyPhimComponent', () => {
  let component: AdminQuanLyPhimComponent;
  let fixture: ComponentFixture<AdminQuanLyPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuanLyPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuanLyPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

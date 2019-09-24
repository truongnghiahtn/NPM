import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDangKyComponent } from './admin-dang-ky.component';

describe('AdminDangKyComponent', () => {
  let component: AdminDangKyComponent;
  let fixture: ComponentFixture<AdminDangKyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDangKyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDangKyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

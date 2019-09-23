import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminQuanLyNguoiDungRoutingModule } from './admin-quan-ly-nguoi-dung-routing.module';
import { AdminQuanLyNguoiDungComponent } from './admin-quan-ly-nguoi-dung.component';


@NgModule({
  declarations: [AdminQuanLyNguoiDungComponent],
  imports: [
    CommonModule,
    AdminQuanLyNguoiDungRoutingModule
  ]
})
export class AdminQuanLyNguoiDungModule { }

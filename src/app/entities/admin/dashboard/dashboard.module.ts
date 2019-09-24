import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanLyTinTucComponent } from './quan-ly-tin-tuc/quan-ly-tin-tuc.component';


@NgModule({
  declarations: [DashboardComponent, QuanLyNguoiDungComponent, QuanLyPhimComponent, QuanLyTinTucComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

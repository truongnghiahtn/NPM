import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanLyTinTucComponent } from './quan-ly-tin-tuc/quan-ly-tin-tuc.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { MaterialModule } from 'src/app/common/material/material.module';



@NgModule({
  declarations: [DashboardComponent, QuanLyNguoiDungComponent, QuanLyPhimComponent, QuanLyTinTucComponent, AdminHeaderComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,MaterialModule
  ]
})
export class DashboardModule { }

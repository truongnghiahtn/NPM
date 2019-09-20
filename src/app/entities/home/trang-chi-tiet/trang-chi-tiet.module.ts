import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrangChiTietRoutingModule } from './trang-chi-tiet-routing.module';
import { TrangChiTietComponent } from './trang-chi-tiet.component';
import { LichchieuComponent } from './lichchieu/lichchieu.component';
import { ThongtinComponent } from './thongtin/thongtin.component';
import { DanhGiaComponent } from './danh-gia/danh-gia.component';


@NgModule({
  declarations: [TrangChiTietComponent, LichchieuComponent, ThongtinComponent, DanhGiaComponent],
  imports: [
    CommonModule,
    TrangChiTietRoutingModule
  ]
})
export class TrangChiTietModule { }

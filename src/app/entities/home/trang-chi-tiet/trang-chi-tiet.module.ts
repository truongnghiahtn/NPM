import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TrangChiTietRoutingModule } from './trang-chi-tiet-routing.module';
import { TrangChiTietComponent } from './trang-chi-tiet.component';
import { LichchieuComponent } from './lichchieu/lichchieu.component';
import { ThongtinComponent } from './thongtin/thongtin.component';
import { DanhGiaComponent } from './danh-gia/danh-gia.component';
import { ItemLichchieuComponent } from './lichchieu/item-lichchieu/item-lichchieu.component';
import { DateMovieComponent } from './lichchieu/date-movie/date-movie.component';


@NgModule({
  declarations: [TrangChiTietComponent, LichchieuComponent, ThongtinComponent, DanhGiaComponent, ItemLichchieuComponent, DateMovieComponent],
  imports: [
    CommonModule,
    TrangChiTietRoutingModule, FormsModule
  ]
})
export class TrangChiTietModule { }

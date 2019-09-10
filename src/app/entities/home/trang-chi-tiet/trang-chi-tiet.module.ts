import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrangChiTietRoutingModule } from './trang-chi-tiet-routing.module';
import { TrangChiTietComponent } from './trang-chi-tiet.component';


@NgModule({
  declarations: [TrangChiTietComponent],
  imports: [
    CommonModule,
    TrangChiTietRoutingModule
  ]
})
export class TrangChiTietModule { }

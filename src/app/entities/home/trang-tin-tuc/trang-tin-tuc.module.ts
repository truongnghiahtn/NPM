import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrangTinTucRoutingModule } from './trang-tin-tuc-routing.module';
import { TrangTinTucComponent } from './trang-tin-tuc.component';


@NgModule({
  declarations: [TrangTinTucComponent],
  imports: [
    CommonModule,
    TrangTinTucRoutingModule
  ]
})
export class TrangTinTucModule { }

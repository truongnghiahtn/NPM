import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminQuanLyTinTucRoutingModule } from './admin-quan-ly-tin-tuc-routing.module';
import { AdminQuanLyTinTucComponent } from './admin-quan-ly-tin-tuc.component';


@NgModule({
  declarations: [AdminQuanLyTinTucComponent],
  imports: [
    CommonModule,
    AdminQuanLyTinTucRoutingModule
  ]
})
export class AdminQuanLyTinTucModule { }

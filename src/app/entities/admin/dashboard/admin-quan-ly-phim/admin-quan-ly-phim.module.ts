import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminQuanLyPhimRoutingModule } from './admin-quan-ly-phim-routing.module';
import { AdminQuanLyPhimComponent } from './admin-quan-ly-phim.component';


@NgModule({
  declarations: [AdminQuanLyPhimComponent],
  imports: [
    CommonModule,
    AdminQuanLyPhimRoutingModule
  ]
})
export class AdminQuanLyPhimModule { }

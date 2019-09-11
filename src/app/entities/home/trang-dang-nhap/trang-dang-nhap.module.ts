import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrangDangNhapRoutingModule } from './trang-dang-nhap-routing.module';
import { TrangDangNhapComponent } from './trang-dang-nhap.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TrangDangNhapComponent],
  imports: [
    CommonModule,
    TrangDangNhapRoutingModule,
    FormsModule
  ]
})
export class TrangDangNhapModule { }

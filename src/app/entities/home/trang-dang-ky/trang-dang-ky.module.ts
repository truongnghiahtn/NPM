import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrangDangKyRoutingModule } from './trang-dang-ky-routing.module';
import { TrangDangKyComponent } from './trang-dang-ky.component';


@NgModule({
  declarations: [TrangDangKyComponent],
  imports: [
    CommonModule,
    TrangDangKyRoutingModule
  ]
})
export class TrangDangKyModule { }

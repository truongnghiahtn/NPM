import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrangDangKyRoutingModule } from './trang-dang-ky-routing.module';
import { TrangDangKyComponent } from './trang-dang-ky.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TrangDangKyComponent],
  imports: [
    CommonModule,
    TrangDangKyRoutingModule,
    FormsModule
  ]
})
export class TrangDangKyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDangKyRoutingModule } from './admin-dang-ky-routing.module';
import { AdminDangKyComponent } from './admin-dang-ky.component';


@NgModule({
  declarations: [AdminDangKyComponent],
  imports: [
    CommonModule,
    AdminDangKyRoutingModule
  ]
})
export class AdminDangKyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrangDatVeRoutingModule } from './trang-dat-ve-routing.module';
import { TrangDatVeComponent } from './trang-dat-ve.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';


@NgModule({
  declarations: [TrangDatVeComponent, DanhSachGheComponent, ItemGheComponent],
  imports: [
    CommonModule,
    TrangDatVeRoutingModule
  ]
})
export class TrangDatVeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrangDatVeRoutingModule } from './trang-dat-ve-routing.module';
import { TrangDatVeComponent } from './trang-dat-ve.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';
import { CountdownModule } from 'ngx-countdown';
import { MaterialModule } from 'src/app/common/material/material.module';


@NgModule({
  declarations: [TrangDatVeComponent, DanhSachGheComponent, ItemGheComponent],
  imports: [
    CommonModule,
    TrangDatVeRoutingModule,
    CountdownModule,
    MaterialModule
  ]
})
export class TrangDatVeModule { }

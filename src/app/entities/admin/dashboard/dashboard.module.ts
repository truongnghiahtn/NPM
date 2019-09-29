import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { QuanLyNguoiDungComponent } from "./quan-ly-nguoi-dung/quan-ly-nguoi-dung.component";
import { QuanLyPhimComponent } from "./quan-ly-phim/quan-ly-phim.component";
import { QuanLyTinTucComponent } from "./quan-ly-tin-tuc/quan-ly-tin-tuc.component";
import { AdminHeaderComponent } from "./admin-header/admin-header.component";
import { MaterialModule } from "src/app/common/material/material.module";
import { ItemTinTucComponent } from "./quan-ly-tin-tuc/item-tin-tuc/item-tin-tuc.component";
import { ModalNewsComponent } from "./quan-ly-tin-tuc/modal-news/modal-news.component";
import { AdminDangKyModule } from "../admin-dang-ky/admin-dang-ky.module";

@NgModule({
  declarations: [
    DashboardComponent,
    QuanLyNguoiDungComponent,
    QuanLyPhimComponent,
    QuanLyTinTucComponent,
    AdminHeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    AdminDangKyModule,
    FormsModule
  ]
})
export class DashboardModule {}

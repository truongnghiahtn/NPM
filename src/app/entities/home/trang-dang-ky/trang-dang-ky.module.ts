import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { CommonModule } from "@angular/common";

import { TrangDangKyRoutingModule } from "./trang-dang-ky-routing.module";
import { TrangDangKyComponent } from "./trang-dang-ky.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [TrangDangKyComponent],
  imports: [
    CommonModule,
    TrangDangKyRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrangDangKyModule {}

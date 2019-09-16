import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { CommonModule } from "@angular/common";

import { TrangDangNhapRoutingModule } from "./trang-dang-nhap-routing.module";
import { TrangDangNhapComponent } from "./trang-dang-nhap.component";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./../../../common/material/material.module";

@NgModule({
  declarations: [TrangDangNhapComponent],
  imports: [
    CommonModule,
    TrangDangNhapRoutingModule,
    FormsModule,
    MaterialModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrangDangNhapModule {}

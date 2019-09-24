import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TrangDangNhapComponent } from "./trang-dang-nhap.component";
import { CandeactiveDangNhap } from "src/app/common/guards/canDeactive.guard";

const routes: Routes = [
  {
    path: "",
    component: TrangDangNhapComponent,
    canDeactivate: [CandeactiveDangNhap]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrangDangNhapRoutingModule {}

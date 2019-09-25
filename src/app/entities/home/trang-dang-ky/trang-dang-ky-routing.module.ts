import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TrangDangKyComponent } from "./trang-dang-ky.component";
import { CandeactiveDangKy } from "src/app/common/guards/canDeactive.guard";

const routes: Routes = [
  {
    path: "",
    component: TrangDangKyComponent,
    canDeactivate: [CandeactiveDangKy]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrangDangKyRoutingModule {}

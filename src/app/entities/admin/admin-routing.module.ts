import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { CandeactiveDangNhap } from "src/app/common/guards/canDeactive.guard";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    canDeactivate: [CandeactiveDangNhap]
  },
  {
    path:"dang-ky",loadChildren:"./admin-dang-ky/admin-dang-ky.module#AdminDangKyModule"
  },
  {path:"dashboard",loadChildren:"./dashboard/dashboard.module#DashboardModule"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

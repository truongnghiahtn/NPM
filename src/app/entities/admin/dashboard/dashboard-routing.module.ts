import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { AuthGuard } from "./../../../common/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "dang-ky",
        loadChildren: "./admin-dang-ky/admin-dang-ky.module#AdminDangKyModule"
      },
      {
        path: "quan-ly-nguoi-dung",
        loadChildren:
          "./admin-quan-ly-nguoi-dung/admin-quan-ly-nguoi-dung.module#AdminQuanLyNguoiDungModule"
      },
      {
        path: "quan-ly-phim",
        loadChildren:
          "./admin-quan-ly-phim/admin-quan-ly-phim.module#AdminQuanLyPhimModule"
      },
      {
        path: "quan-ly-tin-tuc",
        loadChildren:
          "./admin-quan-ly-tin-tuc/admin-quan-ly-tin-tuc.module#AdminQuanLyTinTucModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent, children: [
      { path: "", loadChildren: "./trang-chu/trang-chu.module#TrangChuModule" },
      { path: "trang-chu", loadChildren: "./trang-chu/trang-chu.module#TrangChuModule" },
      { path: "dang-ky", loadChildren: "./trang-dang-ky/trang-dang-ky.module#TrangDangKyModule" },
      { path: "dang-nhap", loadChildren: "./trang-dang-nhap/trang-dang-nhap.module#TrangDangNhapModule" },
      { path: "dat-ve", loadChildren: "./trang-dat-ve/trang-dat-ve.module#TrangDatVeModule" },
      { path: "chi-tiet-tin-tuc/:id", loadChildren: "./trang-tin-tuc/trang-tin-tuc.module#TrangTinTucModule" },
      { path: "chi-tiet-phim/:id", loadChildren: "./trang-chi-tiet/trang-chi-tiet.module#TrangChiTietModule" },
      { path: "dat-ve/:id", loadChildren: "./trang-dat-ve/trang-dat-ve.module#TrangDatVeModule"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

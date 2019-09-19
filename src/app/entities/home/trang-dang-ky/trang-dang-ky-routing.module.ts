import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TrangDangKyComponent } from "./trang-dang-ky.component";

const routes: Routes = [{ path: "", component: TrangDangKyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrangDangKyRoutingModule {}

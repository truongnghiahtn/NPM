import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangDangNhapComponent } from './trang-dang-nhap.component';


const routes: Routes = [
  {path:"",component:TrangDangNhapComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrangDangNhapRoutingModule { }

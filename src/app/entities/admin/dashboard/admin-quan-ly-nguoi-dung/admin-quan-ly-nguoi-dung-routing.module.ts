import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminQuanLyNguoiDungComponent } from './admin-quan-ly-nguoi-dung.component';


const routes: Routes = [
  {path:"",component:AdminQuanLyNguoiDungComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminQuanLyNguoiDungRoutingModule { }

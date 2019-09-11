import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangTinTucComponent } from './trang-tin-tuc.component';


const routes: Routes = [
  {path:"",component:TrangTinTucComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrangTinTucRoutingModule { }

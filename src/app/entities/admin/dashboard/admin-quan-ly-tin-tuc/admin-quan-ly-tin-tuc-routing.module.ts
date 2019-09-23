import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminQuanLyTinTucComponent } from './admin-quan-ly-tin-tuc.component';


const routes: Routes = [
  {path:"",component:AdminQuanLyTinTucComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminQuanLyTinTucRoutingModule { }

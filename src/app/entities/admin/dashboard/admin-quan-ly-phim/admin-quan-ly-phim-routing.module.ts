import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminQuanLyPhimComponent } from './admin-quan-ly-phim.component';


const routes: Routes = [
  {path:"",component:AdminQuanLyPhimComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminQuanLyPhimRoutingModule { }

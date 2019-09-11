import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './trang-chu.component';


const routes: Routes = [
<<<<<<< HEAD
  {path:"",component:TrangChuComponent}
=======
  {path:"", component: TrangChuComponent},
>>>>>>> 70a3f8ea413f9244c8cc8eb39a85efa907c2b0cb
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrangChuRoutingModule { }

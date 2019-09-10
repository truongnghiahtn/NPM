import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './trang-chu.component';


const routes: Routes = [
<<<<<<< HEAD
  {path:"", component: TrangChuComponent},
=======
  {path:"",component:TrangChuComponent}
>>>>>>> carousel
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrangChuRoutingModule { }

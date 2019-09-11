import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangChiTietComponent } from './trang-chi-tiet.component';



const routes: Routes = [
  { path: "", component: TrangChiTietComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrangChiTietRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangDatVeComponent } from './trang-dat-ve.component';


const routes: Routes = [
  {path:"",component:TrangDatVeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrangDatVeRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDangKyComponent } from './admin-dang-ky.component';


const routes: Routes = [
  {path:"",component:AdminDangKyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDangKyRoutingModule { }

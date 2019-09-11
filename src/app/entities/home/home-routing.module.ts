import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
 {path:"",
<<<<<<< HEAD
  component:HomeComponent,children:[{
    path:"",loadChildren:"./trang-chu/trang-chu.module#TrangChuModule"
  }]
  }
=======
  component:HomeComponent, children: [
    {path: "", loadChildren: "./trang-chu/trang-chu.module#TrangChuModule"}
  ]}
>>>>>>> 70a3f8ea413f9244c8cc8eb39a85efa907c2b0cb
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

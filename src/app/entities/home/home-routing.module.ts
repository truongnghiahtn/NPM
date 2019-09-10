import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
<<<<<<< HEAD
 {path:"",
  component:HomeComponent, children: [
    {path: "", loadChildren: "./trang-chu/trang-chu.module#TrangChuModule"}
  ]}
=======
  {
    path: "",
    component: HomeComponent,children:[
      {path:"",loadChildren:"./trang-chu/trang-chu.module#TrangChuModule"}
    ]
  }
>>>>>>> carousel
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntitiesComponent } from './entities.component';


const routes: Routes = [
  {
    path: "",
    component: EntitiesComponent,
    children: [
      {
        path: "",
        loadChildren: "./home/home.module#HomeModule"
      },
      {
        path:"trang-chu",
        loadChildren:"./home/home.module#HomeModule"
      },
      {
        path: "admin",
        loadChildren: "./admin/admin.module#AdminModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitiesRoutingModule { }

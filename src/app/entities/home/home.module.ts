import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/layouts/header/header.component';
import { FooterComponent } from 'src/app/layouts/footer/footer.component';


@NgModule({
  declarations: [HomeComponent,
  HeaderComponent,FooterComponent]
  ,
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

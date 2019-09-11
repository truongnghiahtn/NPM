import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
<<<<<<< HEAD
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 70a3f8ea413f9244c8cc8eb39a85efa907c2b0cb
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,HttpClientModule
=======
    BrowserAnimationsModule, HttpClientModule
>>>>>>> 70a3f8ea413f9244c8cc8eb39a85efa907c2b0cb
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

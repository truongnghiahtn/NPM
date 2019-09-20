import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TrangTinTucRoutingModule } from './trang-tin-tuc-routing.module';
import { TrangTinTucComponent } from './trang-tin-tuc.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [TrangTinTucComponent, CommentComponent],
  imports: [
    CommonModule,
    TrangTinTucRoutingModule,FormsModule 
  ]
})
export class TrangTinTucModule { }

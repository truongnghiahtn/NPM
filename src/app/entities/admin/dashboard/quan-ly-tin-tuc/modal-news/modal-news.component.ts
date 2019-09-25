import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-news',
  templateUrl: './modal-news.component.html',
  styleUrls: ['./modal-news.component.scss']
})
export class ModalNewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // truyenthongtin(){
  //       this.formnews.setValue({
  //     name:this.Getnews.name,
  //     content1:this.Getnews.content,
  //     content2:this.Getnews.content2,
  //     Img1:this.Getnews.Img,
  //     Img2:this.Getnews.Img2,
  //     loaitintuc:this.Getnews.loaitin,
  //   })
  // }

}

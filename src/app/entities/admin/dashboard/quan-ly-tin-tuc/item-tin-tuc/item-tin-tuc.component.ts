import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item-tin-tuc',
  templateUrl: './item-tin-tuc.component.html',
  styleUrls: ['./item-tin-tuc.component.scss']
})
export class ItemTinTucComponent implements OnInit {
  getnews:any;
  idfix:any;
  @Input() News;
  @Output() laythongtin = new EventEmitter();
  @Output() xoathongtin = new EventEmitter();
  @Output() reset = new EventEmitter();
  @ViewChild("formnews", { static: false }) formnews: NgForm
  constructor() { }
  save:boolean=false;
  ngOnInit() {
  }
  laythongtinnews(id){
    this.laythongtin.emit(id);
    console.log(id);
    
  }
  xoa(id){
    this.xoathongtin.emit(id);
    console.log(id);
  }
  resetsave(){
    this.reset.emit(this.save)
  }

}

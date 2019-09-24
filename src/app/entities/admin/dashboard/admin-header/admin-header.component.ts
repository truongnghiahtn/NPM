import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  info:any;
  status:boolean=true;
  @Output() eventdetail = new EventEmitter();
  constructor() { }

  layinfoadmin(){
    if(localStorage.getItem("admin"))
    {
      this.info=JSON.parse(localStorage.getItem("admin"))
    }
    console.log(this.info);
  }
  ngOnInit() {
    this.layinfoadmin();
  }
  detail(){
    this.status=!this.status;
    this.eventdetail.emit(this.status);
    
  }

}

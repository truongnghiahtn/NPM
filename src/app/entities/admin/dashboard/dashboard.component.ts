import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  animate:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  chitiet(status){
    this.animate=status;
    console
  }

}

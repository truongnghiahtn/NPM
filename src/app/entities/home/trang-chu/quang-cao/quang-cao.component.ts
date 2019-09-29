import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quang-cao',
  templateUrl: './quang-cao.component.html',
  styleUrls: ['./quang-cao.component.scss']
})
export class QuangCaoComponent implements OnInit {
  status:boolean=true
  constructor() { }

  ngOnInit() {
       setInterval(() => {
      this.chuyentrang();
    }, 10000);
  }

  chuyentrang(){
    this.status=!this.status
  }

}

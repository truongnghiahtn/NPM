import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thongtin',
  templateUrl: './thongtin.component.html',
  styleUrls: ['./thongtin.component.scss']
})
export class ThongtinComponent implements OnInit {
  @Input() movie; 
  constructor() { }

  
  ngOnInit() {
    console.log(this.movie)
  }

}

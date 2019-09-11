import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.scss']
})
export class DanhSachGheComponent implements OnInit {
  @Input() danhSachGhe;

  defaultNumberGhe: Array<any> = []; //Số lượng ghế = 30

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    for (let i = 0; i < 30; i++) {
      this.defaultNumberGhe.push(this.danhSachGhe[i]);
    }
    console.log(this.defaultNumberGhe);
  }
}

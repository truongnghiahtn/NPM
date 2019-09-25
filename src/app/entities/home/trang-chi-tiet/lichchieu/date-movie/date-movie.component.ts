import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-movie',
  templateUrl: './date-movie.component.html',
  styleUrls: ['./date-movie.component.scss']
})
export class DateMovieComponent implements OnInit {
  @Input() lichChieu;
  lichChieuPhim: Array<any> = [];
  groups: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log(this.lichChieu);
    this.groups = this.lichChieu.reduce((a, item) => {
      console.log(item);
      let tenCumRap = item.tenCumRap;
      a[tenCumRap.slice(0, tenCumRap.length)] = a[tenCumRap.slice(0, tenCumRap.length)] || [];
      a[tenCumRap.slice(0, tenCumRap.length)].push(item);
      return a;
    }, {})
    console.log(this.groups);
    this.lichChieuPhim = Object.keys(this.groups).map((tenCumRap, diaChi) => {
      return { tenCumRap: tenCumRap, lichChieu: this.groups[tenCumRap] };
    });
    console.log(this.lichChieuPhim);
  }

}

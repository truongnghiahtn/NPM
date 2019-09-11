import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {
  @Input() movies;
  moviesInDay: any = {};
  moviesToDay: Array<any> = [];
  thoiLuong: any;
  status: boolean = true;
  url: any;
  constructor(
    private _dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    const uri = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${this.movies.danhSachPhim[0].maPhim}`;
    this._dataService.get(uri).subscribe((data: any) => {
      this.moviesInDay = data;
      data.heThongRapChieu.map(item => {
        item.cumRapChieu.map(lichChieu => {
          if (lichChieu.maCumRap === this.movies.maCumRap) {
            lichChieu.lichChieuPhim.map(movieToDay => {
              if (movieToDay.ngayChieuGioChieu.includes("2019-01-01")) {
                this.moviesToDay.push(movieToDay);
              }
              this.thoiLuong = this.moviesToDay[0].thoiLuong;
            })
          }
        })
      })
    })
  }

  _DatVe(maLichChieu) {
    this.router.navigate(['/phong-ve/', maLichChieu], { queryParams: { movieId: this.moviesInDay.maPhim } });
    // console.log(this.movies.maCumRap);
    // console.log(this.moviesInDay);
    // console.log(this.moviesToDay);
  }

  toggle() {
    this.status = !this.status;
  }
}

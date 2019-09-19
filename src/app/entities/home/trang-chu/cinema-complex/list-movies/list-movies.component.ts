import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Subscription } from 'rxjs';
import { MovieTimerComponent } from '../movie-timer/movie-timer.component';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {
  @Input() movies;
  @ViewChildren(MovieTimerComponent) listMovieTimer: QueryList<MovieTimerComponent>;
  moviesInDay: Array<any> = [];
  thoiLuong: any;
  maPhim: any;
  ArrayMaPhim = [];

  subLichChieu = new Subscription();
  constructor(
    private _dataService: DataService,
  ) { }

  ngOnInit() {

  }

  ngOnChanges(): void {
    this.movies.danhSachPhim = this.movies.danhSachPhim.filter(item => {
      this.ArrayMaPhim.push(item.maPhim);
      return item.ngayChieuGioChieu.includes("2019-01-01T");
    })

    this.maPhim = [...new Set(this.ArrayMaPhim)];

    if (this.maPhim) {
      this.maPhim.map(maPhim => {
        let uri = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
        this.subLichChieu = this._dataService.get(uri).subscribe((data: any) => {
          this.moviesInDay.push(data);
          this.moviesInDay.map(item => {
            item.heThongRapChieu.map(item => {
              item.cumRapChieu.map(item => {
                if (item.maCumRap === this.movies.maCumRap) {
                  item.lichChieuPhim.map(a => {
                    this.movies.danhSachPhim.map(item => {
                      if (item.maRap === a.maRap && item.ngayChieuGioChieu === a.ngayChieuGioChieu) {
                        item["maLichChieu"] = a.maLichChieu;
                      }
                    })
                  })
                }
              })
            })
          })
        });
      })
    }
  }

  toggle(thamso) {
    this.listMovieTimer.map(item => {
      if (item.event === thamso) {
        item.status = !item.status;
      }
    })
  }

  ngOnDestroy(): void {
    this.subLichChieu.unsubscribe();
  }
}

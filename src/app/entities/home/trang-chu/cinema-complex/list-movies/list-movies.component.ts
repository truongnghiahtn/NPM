import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  QueryList
} from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";
import { Subscription } from "rxjs";
import { MovieTimerComponent } from "../movie-timer/movie-timer.component";

@Component({
  selector: "app-list-movies",
  templateUrl: "./list-movies.component.html",
  styleUrls: ["./list-movies.component.scss"]
})
export class ListMoviesComponent implements OnInit {
  @Input() movies;
  @ViewChildren(MovieTimerComponent) listMovieTimer: QueryList<
    MovieTimerComponent
  >;
  moviesInDay: Array<any> = [];
  thoiLuong: any;
  maPhim: any;
  ArrayMaPhim = [];

  subLichChieu = new Subscription();
  constructor(private _dataService: DataService) { }

  ngOnInit() { }

  ngOnChanges(): void {
    this.movies.danhSachPhim = this.movies.danhSachPhim.map(item => {
      this.ArrayMaPhim.push(item.maPhim);
      item.lstLichChieuTheoPhim = item.lstLichChieuTheoPhim.filter(lichChieu => lichChieu.ngayChieuGioChieu.includes("2019-01-01T"))
      return item
    });

    this.maPhim = [...new Set(this.ArrayMaPhim)];

    if (this.maPhim) {
      this.maPhim.map(maPhim => {
        let uri = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
        this.subLichChieu = this._dataService
          .get(uri)
          .subscribe((data: any) => {
            this.moviesInDay.push(data);
          });
      });
    }
  }

  toggle(thamso) {
    this.listMovieTimer.map(item => {
      if (item.event === thamso) {
        item.status = !item.status;
      }
    });
  }

  ngOnDestroy(): void {
    this.subLichChieu.unsubscribe();
  }
}

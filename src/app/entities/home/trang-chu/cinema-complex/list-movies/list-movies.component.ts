import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-movies",
  templateUrl: "./list-movies.component.html",
  styleUrls: ["./list-movies.component.scss"]
})
export class ListMoviesComponent implements OnInit {
  @Input() movies;
  moviesInDay: Array<any> = [];
  moviesToDay: Array<any> = [];
  thoiLuong: any;
  status: boolean = true;
  url: any;
  maPhim: any;
  ArrayMaPhim = [];
  constructor(private _dataService: DataService, private router: Router) {}

  ngOnInit() {}

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.movies.danhSachPhim.map(item => {
      this.ArrayMaPhim.push(item.maPhim);
    });

    this.maPhim = [...new Set(this.ArrayMaPhim)];

    if (this.maPhim) {
      this.maPhim.map(maPhim => {
        let uri = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
        this._dataService.get(uri).subscribe((data: any) => {
          this.moviesInDay.push(data);
          this.moviesInDay.map(item => {
            item.heThongRapChieu.map(item => {
              item.cumRapChieu.map(item => {
                if (item.maCumRap === this.movies.maCumRap) {
                  item.lichChieuPhim.map(a => {
                    this.movies.danhSachPhim.map(item => {
                      if (
                        item.maRap === a.maRap &&
                        item.ngayChieuGioChieu === a.ngayChieuGioChieu
                      ) {
                        item["maLichChieu"] = a.maLichChieu;
                      }
                    });
                  });
                }
              });
            });
          });
        });
      });
    }
  }

  _DatVe(maLichChieu, maPhim) {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(["/dat-ve/", maLichChieu], {
        queryParams: { movieId: maPhim }
      })
    );

    window.open(url, "_blank");

    // this.router.navigate(['/dat-ve/', maLichChieu], { queryParams: { movieId: this.moviesInDay.maPhim } }).then(result => {
    //   window.open(window.location.href, '_blank');
    // })

    /*     console.log(this.movies.maCumRap);
        console.log(this.moviesInDay);
        console.log(this.moviesToDay); */
  }

  toggle() {
    this.status = !this.status;
  }
}

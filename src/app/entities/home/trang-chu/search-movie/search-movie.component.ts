import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "src/app/shared/services/data.service";
import { SearchRapComponent } from "./search-rap/search-rap.component";

@Component({
  selector: "app-search-movie",
  templateUrl: "./search-movie.component.html",
  styleUrls: ["./search-movie.component.scss"]
})
export class SearchMovieComponent implements OnInit {
  @ViewChild(SearchRapComponent, { static: false })
  selectedRap: SearchRapComponent;
  movie: any;
  mangLichChieu: any;
  ngay: any;
  gio: any = 0;
  maLichChieu: number = 0;
  constructor(private router: Router, private dataSV: DataService) {}
  ngOnInit() {}
  ngAfterViewInit() {}
  chonPhim(event) {
    this.movie = event;
    console.log(event);
  }
  chonRap(event) {
    this.mangLichChieu = event;
    console.log(event);
  }
  chonNgay(event) {
    this.ngay = event;
    console.log(event);
  }
  chonGio(event) {
    console.log(this.selectedRap.rap);
    this.gio = event;
    console.log(event);
    // console.log(this.movie);
    const uri = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${this.movie}`;
    this.dataSV.get(uri).subscribe(
      data => {
        data.heThongRapChieu.map(item => {
          item.cumRapChieu.map(item1 => {
            item1.lichChieuPhim.map(item => {
              if (item.ngayChieuGioChieu === this.gio) {
                if (item1.maCumRap === this.selectedRap.rap) {
                  this.maLichChieu = item.maLichChieu;
                }
              }
            });
          });
        });
      },
      err => {
        console.log(err);
      }
    );
  }
  datVe() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(["/dat-ve/", this.maLichChieu], {
        queryParams: { movieId: this.movie }
      })
    );

    window.open(url, "_blank");
  }
}

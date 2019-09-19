import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-movie",
  templateUrl: "./search-movie.component.html",
  styleUrls: ["./search-movie.component.scss"]
})
export class SearchMovieComponent implements OnInit {
  constructor(private dataServive: DataService, private router: Router) {}
  danhSachPhim: any = [];
  danhSachRap: any = [];
  thongTinLichChieuPhim: any;
  ngOnInit() {
    this.layDanhSachPhim();
    this.layThongTinHeThongRap();
    this.layThongTinLichChieuPhim();
  }
  layDanhSachPhim() {
    const uri =
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02";
    this.dataServive.get(uri).subscribe(
      data => {
        console.log(data);
        this.danhSachPhim = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  layThongTinHeThongRap() {
    const uri =
      "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap";
    this.dataServive.get(uri).subscribe(
      data => {
        console.log(data);
        this.danhSachRap = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  layThongTinLichChieuPhim() {
    const uri = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=1344`;
    this.dataServive.get(uri).subscribe(
      data => {
        this.thongTinLichChieuPhim = data.heThongRapChieu;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
  datVe() {
    this.router.navigate(["dat-ve"]);
  }
}

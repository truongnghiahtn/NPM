import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DataService } from "src/app/shared/services/data.service";
import { Phim } from "src/app/common/models/phim";
import { DatePipe } from "@angular/common";
declare var $: any;

@Component({
  selector: "app-quan-ly-phim",
  templateUrl: "./quan-ly-phim.component.html",
  styleUrls: ["./quan-ly-phim.component.scss"],
  providers: [DatePipe]
})
export class QuanLyPhimComponent implements OnInit {
  @ViewChild("formPhim", { static: false }) formPhim: NgForm;
  danhSachPhim: Array<any> = [];
  danhSachNhom: Array<any> = [
    { maNhom: "GP01" },
    { maNhom: "GP02" },
    { maNhom: "GP03" },
    { maNhom: "GP04" },
    { maNhom: "GP05" },
    { maNhom: "GP06" },
    { maNhom: "GP07" },
    { maNhom: "GP08" },
    { maNhom: "GP09" },
    { maNhom: "GP10" }
  ];
  default: any = "GP01";
  constructor(private dataService: DataService, private datePide: DatePipe) { }
  ngOnInit() {
    this.default = "GP01";
    console.log(this.danhSachNhom);
    this.layDanhSachPhim(this.default);
  }

  selectOption(maNhom) {
    this.layDanhSachPhim(maNhom);
    this.default = maNhom;
  }

  layDanhSachPhim(maNhom) {
    this.dataService
      .get(
        `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`
      )
      .subscribe((data: Phim[]) => {
        this.danhSachPhim = data;
      });
  }

  themPhim() {
    this.dataService
      .post(
        `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim`,
        this.formPhim.value
      )
      .subscribe(
        (data: any) => {
          console.log(data);
          this.layDanhSachPhim(data.maNhom);
        },
        (err: any) => {
          console.log(err);
        }
      );
  }

  setValue(Phim: Phim) {
    console.log(Phim);
    this.formPhim.setValue({
      maPhim: Phim.maPhim,
      tenPhim: Phim.tenPhim,
      biDanh: Phim.biDanh,
      trailer: Phim.trailer,
      hinhAnh: Phim.hinhAnh,
      moTa: Phim.moTa,
      maNhom: Phim.maNhom,
      ngayKhoiChieu: this.datePide.transform(Phim.ngayKhoiChieu, "dd/MM/yyyy"),
      danhGia: Phim.danhGia
    });
  }

  Update() {
    this.dataService
      .post(
        `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim`,
        this.formPhim.value
      )
      .subscribe(
        (data: any) => {
          console.log(data);
          this.layDanhSachPhim(data.maNhom);
        },
        (err: any) => console.log(err)
      );
  }

  Delete(Phim: Phim) {
    this.dataService
      .deletePhim(
        `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${Phim.maPhim}`
      )
      .subscribe(
        (data: any) => {
          console.log(data);
          this.layDanhSachPhim(Phim.maNhom);
        },
        (err: any) => console.log(err)
      );
  }
}

import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";

@Component({
  selector: "app-quan-ly-nguoi-dung",
  templateUrl: "./quan-ly-nguoi-dung.component.html",
  styleUrls: ["./quan-ly-nguoi-dung.component.scss"]
})
export class QuanLyNguoiDungComponent implements OnInit {
  @Output() event = new EventEmitter();
  @Output() them = new EventEmitter();
  @Output() sua = new EventEmitter();
  searchInput: string = "";
  constructor(private dataSV: DataService) {}
  mangNguoiDung: any = [];
  trangThai: boolean = false;
  mangTimKiem: any = [];
  ngOnInit() {
    this.layDSNguoiDung();
  }

  // Call api
  layDSNguoiDung() {
    const uri =
      "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01";
    this.dataSV.get(uri).subscribe(
      data => {
        console.log(data);
        this.mangNguoiDung = data;
        this.mangTimKiem = this.mangNguoiDung;
      },
      err => {
        console.log(err);
      }
    );
  }
  xoaNguoiDung(item) {
    console.log(item);
    const uri = `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${item.taiKhoan}`;
    this.dataSV.delete(uri).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  // Output event
  themNguoiDung() {
    this.trangThai = true;
    this.them.emit(this.trangThai);
  }
  capNhatThongTin(item) {
    this.event.emit(item);
    this.trangThai = false;
    this.sua.emit(this.trangThai);
  }

  timKiem(event) {
    this.mangTimKiem = [];
    this.searchInput = event.target.value;
    this.searchInput = this.searchInput.toLowerCase();
    console.log(this.searchInput);
    if (this.mangNguoiDung !== []) {
      this.mangNguoiDung.map(item => {
        item.hoTen = item.hoTen.toLowerCase();
        if (item.hoTen.indexOf(this.searchInput) !== -1) {
          this.mangTimKiem.push(item);
        }
      });
    }
  }
}

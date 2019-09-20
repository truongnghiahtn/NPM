import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-ngay",
  templateUrl: "./search-ngay.component.html",
  styleUrls: ["./search-ngay.component.scss"]
})
export class SearchNgayComponent implements OnInit {
  thongTinLichChieuPhim: any = [];

  constructor(private dataServive: DataService, private router: Router) {}
  @Input() rap;
  @Output() event = new EventEmitter();
  ngay: any;
  ngOnInit() {
    this.layThongTinLichChieuPhim();
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
  chonNgay(value) {
    this.ngay = value;
    this.event.emit(value);
  }
}

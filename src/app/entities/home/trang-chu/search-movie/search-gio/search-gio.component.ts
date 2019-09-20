import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-search-gio",
  templateUrl: "./search-gio.component.html",
  styleUrls: ["./search-gio.component.scss"]
})
export class SearchGioComponent implements OnInit {
  thongTinLichChieuPhim: any = [];

  constructor(private dataServive: DataService, private router: Router) {}
  @Input() ngay;
  @Output() event = new EventEmitter();
  gio: any;
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
  chonGio(value) {
    console.log(value);
    this.event.emit(value);
  }
}

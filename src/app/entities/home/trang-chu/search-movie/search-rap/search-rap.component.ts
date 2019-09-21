import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-search-rap",
  templateUrl: "./search-rap.component.html",
  styleUrls: ["./search-rap.component.scss"]
})
export class SearchRapComponent implements OnInit {
  danhSachRap: any = [];
  rap: any = [];
  mangLichChieu: any = [];

  constructor(private dataServive: DataService, private router: Router) {}
  @Input() movie;
  @Output() event = new EventEmitter();
  ngOnInit() {}

  layThongTinDanhSachRap() {
    const uri = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${this.movie}`;
    this.dataServive.get(uri).subscribe(
      data => {
        data.heThongRapChieu.map(item => {
          item.cumRapChieu.map(item => {
            this.danhSachRap.push(item);
          });
        });
        data.heThongRapChieu.map(item => {
          console.log(item);
        });
      },
      err => {
        console.log(err);
      }
    );
  }
  chonRap(event) {
    this.mangLichChieu = [];
    this.rap = event.value;
    this.danhSachRap.map(item => {
      if (this.rap === item.maCumRap) {
        item.lichChieuPhim.map(item => {
          this.mangLichChieu.push(item);
        });
      }
    });
    this.event.emit(this.mangLichChieu);
  }
  ngOnChanges() {
    if (this.movie !== undefined) {
      this.danhSachRap = [];
      this.layThongTinDanhSachRap();
    }
  }
}

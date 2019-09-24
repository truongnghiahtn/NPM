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
  @Input() mangLichChieu;
  @Output() event = new EventEmitter();
  ngay: any;

  ngOnInit() {}
  ngOnChanges() {
    // console.log(this.mangLichChieu);
  }

  chonNgay(value) {
    this.ngay = value.value;
    this.event.emit(this.ngay);
  }
}

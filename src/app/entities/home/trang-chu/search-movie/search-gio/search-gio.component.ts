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
  @Input() mangLichChieu;
  @Output() event = new EventEmitter();
  gio: any;
  mangGio: any = [];
  ngOnInit() {}

  ngOnChanges() {
    if (this.mangLichChieu !== undefined) {
      this.mangGio = [];
      this.mangLichChieu.map(item => {
        // console.log(item.ngayChieuGioChieu);
        if (this.ngay === item.ngayChieuGioChieu.slice(0, 10)) {
          this.mangGio.push(item);
          console.log(item.ngayChieuGioChieu);
        }
      });
    }
  }
  chonGio(value) {
    console.log(value.value);
    this.event.emit(value.value);
  }
}

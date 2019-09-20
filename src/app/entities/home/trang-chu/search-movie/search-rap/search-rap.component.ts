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
  rap: any;
  constructor(private dataServive: DataService, private router: Router) {}
  @Input() movie;
  @Output() event = new EventEmitter();
  ngOnInit() {
    this.layThongTinHeThongRap();
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
  chonRap(event) {
    this.rap = event.value;
    this.event.emit(event.value);
  }
}

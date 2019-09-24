import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-phim",
  templateUrl: "./search-phim.component.html",
  styleUrls: ["./search-phim.component.scss"]
})
export class SearchPhimComponent implements OnInit {
  danhSachPhim: any = [];
  selectedPhim: any = "";
  @Output() phimDuocChon = new EventEmitter();
  constructor(private dataServive: DataService, private router: Router) {}
  ngOnInit() {
    this.layDanhSachPhim();
  }
  layDanhSachPhim() {
    const uri =
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01";
    this.dataServive.get(uri).subscribe(
      data => {
        this.danhSachPhim = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  chonPhim(data) {
    this.phimDuocChon.emit(data.value);
  }
}

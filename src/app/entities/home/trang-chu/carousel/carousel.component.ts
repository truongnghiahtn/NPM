import { Component, OnInit, AfterViewInit } from "@angular/core";
import { DataService } from "./../../../../shared/services/data.service";
import { Router } from "@angular/router";
declare var $: any;
@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent implements OnInit, AfterViewInit {
  mangPhim: any = [];
  vitri: number = 0;
  phim: any;
  constructor(private dataSV: DataService, private router: Router) {}

  ngOnInit() {
    this.layDanhSachPhim();
  }
  layDanhSachPhim() {
    this.dataSV
      .get(
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
      )
      .subscribe(
        result => {
          this.mangPhim = result;
          this.phim = this.mangPhim[2];
          $(document).ready(function() {
            $(".carousel").carousel();
          });
        },
        err => {
          console.log(err);
        }
      );
  }
  ngAfterViewInit() {
    $(".video-venobox").venobox();
  }
  onCarousel(index, phim) {
    this.vitri = index;
    this.phim = phim;
  }
  chiTiet() {
    this.router.navigate(["/chi-tiet-phim/", this.phim.maPhim]);
  }
}

import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";
import { CarouselItemPhimComponent } from "./carousel-item-phim/carousel-item-phim.component";
declare var $: any;
@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @ViewChild(CarouselItemPhimComponent, { static: false })
  itemPhim: CarouselItemPhimComponent;
  mangPhim: any = [];
  checkedMovie: any;
  constructor(private dataSV: DataService) {}
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
          // console.log(result);
          $(document).ready(function() {
            $(".carousel").carousel();
          });
        },
        err => {
          console.log(err);
        }
      );
  }
  ngAfterViewInit() {}
  onCarousel(movie) {}
}

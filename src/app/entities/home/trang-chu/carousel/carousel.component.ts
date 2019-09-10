import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
declare var $:any;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit, AfterViewInit {
  mangPhim: any = [];
  vitri: number = 0;
  constructor(private dataSV: DataService) { }

  ngOnInit() {
    this.layDanhSachPhim();
  }
  layDanhSachPhim() {
    this.dataSV.get("http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01").subscribe(
      (result) => {
        this.mangPhim = result;
        console.log(result);
        $(document).ready(function () {
          $(".carousel").carousel();
        })
      },
      (err) => {
        console.log(err);
      }
    )
  }
  ngAfterViewInit() {

  }
  onCarousel(index, phim) {
    this.vitri = index;
    console.log(phim);
  }
  // chiTiet() {
  //   // this.route.navigate(["/chi-tiet-phim"])
  // }
}

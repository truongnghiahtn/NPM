import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carousel-item-detail',
  templateUrl: './carousel-item-detail.component.html',
  styleUrls: ['./carousel-item-detail.component.scss']
})
export class CarouselItemDetailComponent implements OnInit {
  @Input() details;
  @Input() index;
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  chiTiet() {
    this.router.navigate(["/chi-tiet-phim/",this.details.maPhim],{queryParams:{tenPhim:this.details.tenPhim}});
  }
}

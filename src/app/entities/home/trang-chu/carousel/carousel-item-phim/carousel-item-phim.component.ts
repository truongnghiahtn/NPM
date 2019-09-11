import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-item-phim',
  templateUrl: './carousel-item-phim.component.html',
  styleUrls: ['./carousel-item-phim.component.scss']
})
export class CarouselItemPhimComponent implements OnInit {
  @Input() phim;
  @Input() vitri;
  index: number = 0;
  constructor() { }

  ngOnInit() {
  }
  onCarousel(_phim) {
    console.log(this.vitri);
  }
}

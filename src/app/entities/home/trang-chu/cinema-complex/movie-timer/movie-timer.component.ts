import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-timer',
  templateUrl: './movie-timer.component.html',
  styleUrls: ['./movie-timer.component.scss']
})
export class MovieTimerComponent implements OnInit {
  @Input() movieTimer;
  @Input() event;

  status: boolean = false;
  img2D: string = "assets/img/2D.png";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  DatVe(maLichChieu) {
    const url = this.router.serializeUrl(this.router.createUrlTree(['/dat-ve/', maLichChieu]));

    window.open(url, '_blank');

    // this.router.navigate(['/dat-ve/', maLichChieu], { queryParams: { movieId: this.moviesInDay.maPhim } }).then(result => {
    //   window.open(window.location.href, '_blank');
    // })
  }

}

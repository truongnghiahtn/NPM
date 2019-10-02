import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharingDataService } from 'src/app/shared/share/sharing-data.service';

@Component({
  selector: 'app-date-movie',
  templateUrl: './date-movie.component.html',
  styleUrls: ['./date-movie.component.scss']
})
export class DateMovieComponent implements OnInit {
  @Input() lichChieu;
  lichChieuPhim: Array<any> = [];
  groups: Array<any> = [];
  img2D: string = "assets/img/2D.png";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.groups = this.lichChieu.reduce((a, item) => {
      let tenCumRap = item.tenCumRap;
      let diaChi = item.diaChi
      a[tenCumRap + '#' + diaChi] = a[tenCumRap + '#' + diaChi] || [];
      a[tenCumRap + '#' + diaChi].push(item);
      return a;
    }, {})

    this.lichChieuPhim = Object.keys(this.groups).map((keyword) => {
      return { tenCumRap: keyword.split("#")[0], diaChi: keyword.split("#")[1], lichChieu: this.groups[keyword] };
    });
  }

  datVe(maLichChieu) {
    const url = this.router.serializeUrl(this.router.createUrlTree(['/dat-ve/', maLichChieu]));

    window.open(url, '_blank');
  }
}

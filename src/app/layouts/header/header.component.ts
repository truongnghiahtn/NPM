import { Component, OnInit } from '@angular/core';
import { SharingDataService } from 'src/app/shared/share/sharing-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  targetLichChieu: any;
  targetCumRap: any;
  targetTinTuc: any;
  constructor(private sharingData: SharingDataService,
    private router: Router) { }

  ngOnInit() {
    this.sharingData.shareLichChieu.subscribe((data) => this.targetLichChieu = data);

    this.sharingData.shareCumRap.subscribe((data) => this.targetCumRap = data);

    this.sharingData.shareTinTuc.subscribe((data) => this.targetTinTuc = data);
  }

  trangChu() {
    if (location.href === "http://localhost:4200/") {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      this.router.navigate([""]);
    }
  }

  lichChieu() {
    this.targetLichChieu.scrollIntoView({ behavior: 'smooth' });
  }

  cumRap() {
    this.targetCumRap.scrollIntoView({ behavior: 'smooth' });
  }

  tinTuc() {
    this.targetTinTuc.scrollIntoView({ behavior: 'smooth' });
  }
}

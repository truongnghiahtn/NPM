import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-trang-chi-tiet',
  templateUrl: './trang-chi-tiet.component.html',
  styleUrls: ['./trang-chi-tiet.component.scss']
})
export class TrangChiTietComponent implements OnInit {

  constructor(private activatedrouter: ActivatedRoute,
    private _dataservice: DataService,
    private spinner: NgxSpinnerService) { }
  maphim: any;
  mangphim: any[];

  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

    this.laymaphim();
    this.getchitiet();
  }
  laymaphim() {
    this.maphim = this.activatedrouter.snapshot.paramMap.get("id");
  }
  getchitiet() {
    this._dataservice.get(`http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${this.maphim}`)
      .subscribe((data: any) => {
        this.mangphim = data;
      }),
      (err) => {
        console.log(err);
      }
  }
}

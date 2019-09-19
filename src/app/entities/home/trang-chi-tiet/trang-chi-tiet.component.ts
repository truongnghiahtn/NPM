import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trang-chi-tiet',
  templateUrl: './trang-chi-tiet.component.html',
  styleUrls: ['./trang-chi-tiet.component.scss']
})
export class TrangChiTietComponent implements OnInit {

  constructor(private activatedrouter: ActivatedRoute,
    private _dataservice: DataService) { }
  maphim: any;
  mangphim: any[];

  ngOnInit() {
    this.laymaphim();
    this.getchitiet();
  }
  laymaphim() {
    this.maphim = this.activatedrouter.snapshot.paramMap.get("id");
    console.log(this.maphim);
  }
  getchitiet() {
    this._dataservice.get(`http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${this.maphim}`)
      .subscribe((data: any) => {
        this.mangphim = data;
        console.log(this.mangphim)
      }),
      (err) => {
        console.log(err);
      }
  }
}

import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ListCinemasComponent } from '../list-cinemas/list-cinemas.component';

@Component({
  selector: 'app-parent-list-cinemas',
  templateUrl: './parent-list-cinemas.component.html',
  styleUrls: ['./parent-list-cinemas.component.scss']
})
export class ParentListCinemasComponent implements OnInit {
  @ViewChildren(ListCinemasComponent) list: QueryList<ListCinemasComponent>;
  event: any;
  listHTRap: Array<any> = [];
  listLichChieuHTRap: Array<any> = [];
  listCumRap: Array<any> = [];
  listDSPhim: Array<any> = [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._layDanhSachHeThongRap();
    this._layThongTinLichChieu();
  }

  _layDanhSachHeThongRap() {
    const uri = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`;
    this._dataService.get(uri).subscribe(
      (data: any) => {
        this.listHTRap = data;
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  _layThongTinLichChieu() {
    const uri = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`;
    this._dataService.get(uri).subscribe(
      (data: any) => {
        this.listLichChieuHTRap = data;
        this.listLichChieuHTRap.map(item => {
          this.listCumRap.push(item.lstCumRap);
        })
        this.listCumRap.map(item => {
          for (let i of item) {
            this.listDSPhim.push(i);
          }
        })
        this.event = this.listDSPhim[0].maCumRap;
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  _showMovies(event) {
    this.event = event;
  }

  changeEvent(index) {
    this.list.forEach(item => item.index = 0);
    switch (index) {
      case 0:
        this.event = this.listDSPhim[0].maCumRap;
        break;
      case 1:
        this.event = this.listDSPhim[2].maCumRap;
        break;
      case 2:
        this.event = this.listDSPhim[16].maCumRap;
        break;
      case 3:
        this.event = this.listDSPhim[17].maCumRap;
        break;
      case 4:
        this.event = this.listDSPhim[22].maCumRap;
        break;
      case 5:
        this.event = this.listDSPhim[27].maCumRap;
        break;

      default:
        break;
    }
  }
}

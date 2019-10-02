import { Component, OnInit, ViewChildren, QueryList, ViewChild, ElementRef } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ListCinemasComponent } from '../list-cinemas/list-cinemas.component';
import { Subscription } from 'rxjs';
import { SharingDataService } from 'src/app/shared/share/sharing-data.service';

@Component({
  selector: 'app-parent-list-cinemas',
  templateUrl: './parent-list-cinemas.component.html',
  styleUrls: ['./parent-list-cinemas.component.scss']
})
export class ParentListCinemasComponent implements OnInit {
  @ViewChildren(ListCinemasComponent) list: QueryList<ListCinemasComponent>;
  @ViewChild('targetCumRap', { read: ElementRef, static: false }) targetCumRap;
  event: any;
  listHTRap: Array<any> = [];
  listLichChieuHTRap: Array<any> = [];
  listCumRap: Array<any> = [];
  listDSPhim: Array<any> = [];

  subHeThongRap = new Subscription();
  subLichChieu = new Subscription();

  constructor(private _dataService: DataService,
    private sharingData: SharingDataService) { }

  ngOnInit() {
    this._layDanhSachHeThongRap();
    this._layThongTinLichChieu();
  }

  ngAfterViewInit() {
    this.sharingData.shareDataCumRap(this.targetCumRap.nativeElement);
  }

  _layDanhSachHeThongRap() {
    const uri = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`;
    this.subHeThongRap = this._dataService.get(uri).subscribe(
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
    this.subLichChieu = this._dataService.get(uri).subscribe(
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
        this.event = this.listDSPhim[3].maCumRap;
        break;
      case 2:
        this.event = this.listDSPhim[16].maCumRap;
        break;
      case 3:
        this.event = this.listDSPhim[18].maCumRap;
        break;
      case 4:
        this.event = this.listDSPhim[23].maCumRap;
        break;
      case 5:
        this.event = this.listDSPhim[28].maCumRap;
        break;

      default:
        break;
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subHeThongRap.unsubscribe();
    this.subLichChieu.unsubscribe();
  }
}

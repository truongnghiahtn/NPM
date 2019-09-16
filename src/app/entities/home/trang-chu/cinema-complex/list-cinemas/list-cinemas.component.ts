import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-list-cinemas',
  templateUrl: './list-cinemas.component.html',
  styleUrls: ['./list-cinemas.component.scss']
})
export class ListCinemasComponent implements OnInit {
  index: number = 0;
  @Input() listHTRap;
  @Output() eventShow = new EventEmitter();
  listCumRap = [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._layThongTinLichChieu();
  }

  ngOnChanges(): void {
  }

  _layThongTinLichChieu() {
    const uri = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${this.listHTRap.maHeThongRap}&maNhom=GP01`;
    this._dataService.get(uri).subscribe(
      (data: any) => {
        data.map(item => {
          this.listCumRap = item.lstCumRap;
        })
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  _showMovies(maCumRap, i) {
    this.eventShow.emit(maCumRap);
    this.index = i;
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Subscription } from 'rxjs';

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

  subLichChieuHeThongRap = new Subscription();

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    const uri = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${this.listHTRap.maHeThongRap}&maNhom=GP01`;
    this.subLichChieuHeThongRap = this._dataService.get(uri).subscribe(
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

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subLichChieuHeThongRap.unsubscribe();
  }
}
